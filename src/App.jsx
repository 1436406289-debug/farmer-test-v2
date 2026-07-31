import { useEffect, useState } from 'react'
import { HomePage } from './components/HomePage'
import { QuizPage } from './components/QuizPage'
import { FarmerResult } from './components/FarmerResult'
import { questions } from './data/questions'
import { predictFarmerType } from './utils/model'

const STORAGE_KEY = 'gusheng-corn-tri20-test-v1'

function readSavedProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return {
      answers: saved?.answers ?? {},
      currentQuestion: Math.min(saved?.currentQuestion ?? 0, questions.length - 1),
    }
  } catch {
    return { answers: {}, currentQuestion: 0 }
  }
}

function App() {
  const [screen, setScreen] = useState('home')
  const [answers, setAnswers] = useState(() => readSavedProgress().answers)
  const [currentQuestion, setCurrentQuestion] = useState(
    () => readSavedProgress().currentQuestion,
  )
  const [predictionResult, setPredictionResult] = useState(null)
  const [predictionError, setPredictionError] = useState('')
  const [isPredicting, setIsPredicting] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, currentQuestion, updatedAt: new Date().toISOString() }),
    )
  }, [answers, currentQuestion])

  const selectAnswer = (score) => {
    setAnswers((previous) => ({
      ...previous,
      [questions[currentQuestion].id]: score,
    }))
  }

  const generateProfile = async () => {
    const answerValues = questions.map((question) => answers[question.id])

    setIsPredicting(true)
    setPredictionError('')

    try {
      const result = await predictFarmerType(answerValues)
      setPredictionResult(result)
      setScreen('result')
    } catch (error) {
      setPredictionError(error instanceof Error ? error.message : '画像生成失败，请稍后重试')
    } finally {
      setIsPredicting(false)
    }
  }

  const restartTest = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setPredictionResult(null)
    setPredictionError('')
    setScreen('quiz')
  }

  if (screen === 'home') {
    return (
      <HomePage
        answeredCount={Object.keys(answers).length}
        totalQuestions={questions.length}
        onStart={() => setScreen('quiz')}
      />
    )
  }

  if (screen === 'result' && predictionResult) {
    return (
      <FarmerResult {...predictionResult} onRestart={restartTest} />
    )
  }

  return (
    <QuizPage
      questions={questions}
      currentIndex={currentQuestion}
      answers={answers}
      onSelectAnswer={selectAnswer}
      onPrevious={() => setCurrentQuestion((index) => Math.max(0, index - 1))}
      onNext={() => setCurrentQuestion((index) => Math.min(questions.length - 1, index + 1))}
      onBackHome={() => setScreen('home')}
      onComplete={generateProfile}
      isPredicting={isPredicting}
      predictionError={predictionError}
    />
  )
}

export default App
