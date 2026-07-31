const MODEL_URL = '/farmer_model.json'
const DIMENSION_NAMES = ['乐观性', '创新性', '不适感', '不安全感']
const QUESTIONS_PER_DIMENSION = 4
const ANSWER_COUNT = DIMENSION_NAMES.length * QUESTIONS_PER_DIMENSION

let modelPromise

function validateAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== ANSWER_COUNT) {
    throw new TypeError(`answers 必须是长度为 ${ANSWER_COUNT} 的数组`)
  }

  answers.forEach((answer, index) => {
    if (!Number.isFinite(answer) || answer < 1 || answer > 5) {
      throw new RangeError(`第 ${index + 1} 题的答案必须是 1 到 5 之间的数字`)
    }
  })
}

function validateModel(model) {
  const { mean, scale, centers, types } = model ?? {}
  const dimensionCount = DIMENSION_NAMES.length

  if (
    !Array.isArray(mean) ||
    !Array.isArray(scale) ||
    mean.length !== dimensionCount ||
    scale.length !== dimensionCount
  ) {
    throw new Error('模型的 mean 或 scale 格式不正确')
  }

  if (scale.some((value) => !Number.isFinite(value) || value === 0)) {
    throw new Error('模型的 scale 必须是非零数值')
  }

  if (
    !Array.isArray(centers) ||
    centers.length === 0 ||
    centers.some(
      (center) =>
        !Array.isArray(center) ||
        center.length !== dimensionCount ||
        center.some((value) => !Number.isFinite(value)),
    )
  ) {
    throw new Error('模型的 centers 格式不正确')
  }

  const typeNames = Object.keys(types ?? {})
  if (typeNames.length !== centers.length) {
    throw new Error('模型的 types 数量必须与 centers 数量一致')
  }
}

async function loadModel() {
  if (!modelPromise) {
    modelPromise = fetch(MODEL_URL)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`模型文件加载失败：${response.status}`)
        }

        const model = await response.json()
        validateModel(model)
        return model
      })
      .catch((error) => {
        modelPromise = undefined
        throw error
      })
  }

  return modelPromise
}

export function calculateDimensions(answers) {
  validateAnswers(answers)

  return Object.fromEntries(
    DIMENSION_NAMES.map((dimension, index) => {
      const start = index * QUESTIONS_PER_DIMENSION
      const dimensionAnswers = answers.slice(start, start + QUESTIONS_PER_DIMENSION)
      const average =
        dimensionAnswers.reduce((total, answer) => total + answer, 0) /
        QUESTIONS_PER_DIMENSION

      return [dimension, average]
    }),
  )
}

export function standardizeDimensions(dimensionValues, mean, scale) {
  return dimensionValues.map((value, index) => (value - mean[index]) / scale[index])
}

export function euclideanDistance(vector, center) {
  return Math.sqrt(
    vector.reduce((sum, value, index) => sum + (value - center[index]) ** 2, 0),
  )
}

export async function predictFarmerType(answers) {
  const model = await loadModel()
  const dimension = calculateDimensions(answers)
  const dimensionValues = DIMENSION_NAMES.map((name) => dimension[name])
  const standardizedVector = standardizeDimensions(
    dimensionValues,
    model.mean,
    model.scale,
  )

  const distances = model.centers.map((center) =>
    euclideanDistance(standardizedVector, center),
  )
  const closestCenterIndex = distances.reduce(
    (closestIndex, distance, index) =>
      distance < distances[closestIndex] ? index : closestIndex,
    0,
  )

  return {
    type: Object.keys(model.types)[closestCenterIndex],
    dimension,
    distance: distances[closestCenterIndex],
  }
}
