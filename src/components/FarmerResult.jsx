import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Brand } from './Brand'

const farmerTypeContent = {
  创新自主型: {
    sampleShare: '28.08%',
    summary: '你愿意主动了解和尝试新技术，也更习惯依靠自己的经验和判断作出选择。',
    tags: ['主动探索', '自主判断', '技术顾虑较少'],
    adoptionTraits: [
      '你对新技术通常保持较积极的态度，也愿意主动了解技术原理和应用方法。面对新的绿色种植技术时，你较少因为操作复杂或效果不确定而直接退缩。',
      '你更倾向于先了解、再判断，并根据自己的生产经验决定是否尝试。这样的决策方式既保留了主动探索的空间，也重视技术与自家生产条件是否真正匹配。',
    ],
    advantage:
      '你较容易理解和接受新的生产理念，也具备独立学习和调整技术方案的能力。经过实际验证后，你的应用经验更容易被其他农户接受，因此具有成为技术示范户和经验传播者的潜力。',
    obstacle:
      '较强的技术接受能力并不意味着所有技术都会立即应用到生产中。是否真正采用一项技术，仍会受到土地条件、劳动力安排、投入成本和技术适配程度等因素影响。',
    actions: [
      {
        title: '从自主尝试转向效果验证',
        description:
          '选择一块地或一个生产环节开展小范围试用，记录肥料投入、人工成本、产量和产品品质变化，用实际结果判断技术是否适合自己的生产条件。',
      },
      {
        title: '在关键环节获得专业支持',
        description:
          '可以在播种、施肥和田间管理等关键节点与技术人员核对方案，避免因为局部操作偏差影响整体效果。',
      },
      {
        title: '分享经过验证的生产经验',
        description:
          '当技术应用效果较稳定时，可以参与示范田建设、田间交流或经验分享，帮助周围农户更直观地了解技术效果。',
      },
    ],
    actionPrompt: '从一块示范田开始，把你的尝试变成可以比较、可以复制的生产经验。',
  },
  乐观顾虑型: {
    sampleShare: '33.50%',
    summary: '你认可绿色技术的价值，也愿意尝试，但在真正使用前仍希望获得更多保障和指导。',
    tags: ['认可技术价值', '使用意愿较强', '需要过程支持'],
    adoptionTraits: [
      '你通常能够看到新技术可能带来的好处，对绿色种植技术也具有较强的使用意愿。',
      '但当技术真正进入生产环节时，你可能会担心操作方法是否正确、技术效果是否稳定，或者首次尝试是否会影响产量和收益。这种状态并不是不愿意使用，而是愿意使用，但仍不够放心。',
    ],
    advantage:
      '你已经具备较好的技术接受基础，不需要反复说明绿色技术有没有价值。一旦操作难点和效果风险得到解决，你较容易将使用意愿转化为实际应用。',
    obstacle:
      '你真正担心的通常不是技术理念，而是应用过程中的不确定性，包括技术步骤能否掌握、关键环节能否获得帮助、应用效果是否稳定，以及首次尝试是否会增加成本或影响产量。',
    actions: [
      {
        title: '先看现场效果，再决定应用范围',
        description:
          '优先参加示范田观摩，了解技术在当地土壤、气候和鲜食玉米生产条件下的实际表现。',
      },
      {
        title: '采用小范围、低风险的试用方式',
        description:
          '先选择一块地或一个生产环节开展试用，避免一次性调整全部生产方案，并通过投入、产量和品质对比逐步建立使用信心。',
      },
      {
        title: '获得关键环节的全过程指导',
        description:
          '在播种、施肥和田间管理等关键阶段保持与科技小院或农业技术人员的联系，及时反馈和解决具体问题。',
      },
    ],
    actionPrompt:
      '你距离真正采用技术并不远，关键不是再听一次介绍，而是获得一次有人指导、风险可控的实践机会。',
  },
  谨慎观望型: {
    sampleShare: '38.42%',
    summary: '你并不排斥新技术，但更愿意先看到真实效果，再决定是否跟进。',
    tags: ['重视实际效果', '决策较为谨慎', '倾向观察后采用'],
    adoptionTraits: [
      '面对新的绿色种植技术时，你通常不会立即拒绝，但也不容易仅凭技术介绍作出采用决定。',
      '相比主动成为第一批尝试者，你更关注技术是否已经在本地取得稳定效果，以及其他农户使用后是否真正降低了成本、提高了产量或改善了品质。',
    ],
    advantage:
      '你在生产决策中较为稳妥，不会因为短期宣传轻易改变已有生产方式。你更重视真实、可验证的生产效果，这有助于避免盲目采用与自身条件不匹配的技术。',
    obstacle:
      '由于更倾向于等待和观察，你可能错过部分已经较为成熟的绿色种植技术。即使接触过相关推广服务，如果没有看到直观效果，或者技术说明过于复杂，也较难形成稳定的使用意愿。',
    actions: [
      {
        title: '优先查看本地农户的真实案例',
        description:
          '重点了解周围农户应用技术后的投入、产量和品质变化，用本地示范和真实生产结果判断技术价值。',
      },
      {
        title: '从一项容易观察效果的技术开始',
        description:
          '不需要一次性采用完整技术体系，可以先选择操作简单、风险较低、效果容易比较的生产环节进行尝试。',
      },
      {
        title: '把复杂技术拆解成生产步骤',
        description:
          '通过田间演示、图片说明或关键节点提醒，将技术转化为什么时候做、怎么做、做到什么程度的具体步骤。',
      },
    ],
    actionPrompt:
      '不必马上改变整套种植方式，可以先看一个真实案例，再从一项容易掌握的技术开始。',
  },
}

const fallbackContent = {
  sampleShare: null,
  summary: '你的结果反映了当前面对农业新技术时的接受倾向。',
  tags: ['关注实际价值', '结合生产判断', '稳步尝试'],
  adoptionTraits: [
    '你会结合技术本身的价值、应用难度和实际生产条件作出判断。',
    '了解个人得分后，可以从风险可控的小范围试用开始，逐步验证技术是否适合自己的鲜食玉米生产。',
  ],
  advantage: '你能够结合自己的生产经验判断技术是否具有实际价值，并根据现场条件调整采用方式。',
  obstacle: '从认可技术到实际采用，还可能受到土地、劳动力、投入成本和技术支持等现实条件影响。',
  actions: [
    {
      title: '先明确生产需求',
      description: '从鲜食玉米生产中最希望改善的一个问题出发，选择与问题直接相关的技术。',
    },
    {
      title: '开展小范围试用',
      description: '选择一块地或一个生产环节先试用，并记录投入、产量和品质变化。',
    },
    {
      title: '及时获得技术支持',
      description: '在播种、施肥和田间管理等关键节点与农业技术人员核对操作方案。',
    },
  ],
  actionPrompt: '从一个具体问题和一次小范围试用开始，让技术选择更有依据。',
}

function resolveDimensions({
  dimension,
  optimism,
  innovativeness,
  discomfort,
  insecurity,
}) {
  return {
    optimism: optimism ?? dimension?.optimism ?? dimension?.乐观性,
    innovativeness: innovativeness ?? dimension?.innovativeness ?? dimension?.创新性,
    discomfort: discomfort ?? dimension?.discomfort ?? dimension?.不适感,
    insecurity: insecurity ?? dimension?.insecurity ?? dimension?.不安全感,
  }
}

function formatScore(value) {
  return Number.isFinite(value) ? value.toFixed(2) : '--'
}

function RadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null

  const { subject, score } = payload[0].payload

  return (
    <div className="rounded-xl border border-[#dce3d9] bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
      <p className="text-xs text-[#7c877f]">{subject}</p>
      <p className="mt-0.5 text-sm font-black text-[#195f3b]">{formatScore(score)} 分</p>
    </div>
  )
}

export function FarmerResult({
  type,
  dimension,
  optimism,
  innovativeness,
  discomfort,
  insecurity,
  onRestart,
}) {
  const content = farmerTypeContent[type] ?? fallbackContent
  const scores = resolveDimensions({
    dimension,
    optimism,
    innovativeness,
    discomfort,
    insecurity,
  })
  const radarData = [
    { subject: '乐观性', score: scores.optimism, fullMark: 5 },
    { subject: '创新性', score: scores.innovativeness, fullMark: 5 },
    { subject: '不安全感', score: scores.insecurity, fullMark: 5 },
    { subject: '不适感', score: scores.discomfort, fullMark: 5 },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f1e8] px-5 py-6 text-[#173e2b] sm:px-8 sm:py-8">
      <div className="field-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute -right-28 -top-28 size-[460px] rounded-full bg-[#dce8ca]/75 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 size-[500px] rounded-full bg-[#eee0b8]/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <Brand compact />
          <span className="rounded-full border border-[#d8dfd2] bg-white/65 px-3 py-2 text-xs font-bold text-[#617168] sm:px-4">
            鲜食玉米农户画像
          </span>
        </header>

        <div className="mt-9 sm:mt-11">
          <p className="text-sm font-bold tracking-[0.08em] text-[#50705c]">🌱 你的农户画像结果</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[#183f2c] sm:text-4xl">
            看清你的技术选择方式
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7b867e]">
            结合本次作答，了解你在鲜食玉米绿色生产技术上的判断特点与下一步行动方向。
          </p>
        </div>

        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/90 bg-[#195f3b] text-white shadow-[0_24px_70px_rgba(32,75,50,.2)]">
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border-[52px] border-white/[0.035]" />
          <div className="relative grid gap-8 px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-[#e4f0dc]">
                  你的农户类型
                </span>
                {content.sampleShare && (
                  <span className="text-xs text-white/55">
                    研究样本中该类型占 {content.sampleShare}
                  </span>
                )}
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{type}</h2>
              <p className="mt-4 max-w-xl text-base font-semibold leading-8 text-[#e7f2e0] sm:text-lg">
                {content.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-[#f1d98a]/15 px-3.5 py-2 text-xs font-bold text-[#f8e8af]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {content.sampleShare && (
                <p className="mt-6 text-xs leading-5 text-white/45">
                  注：该占比仅表示论文调查样本中的类型分布，不代表你成为该类型的概率。
                </p>
              )}
            </div>

            <div className="rounded-[1.6rem] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-sm sm:p-5">
              <div className="flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="text-sm font-black text-white">你的个人维度得分</p>
                  <p className="mt-1 text-xs text-white/50">分值来自你本次测试的实际作答</p>
                </div>
                <span className="text-xs font-bold text-[#d7e8cd]">满分 5 分</span>
              </div>

              <div className="h-[280px] w-full sm:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="68%">
                    <PolarGrid stroke="rgba(255,255,255,.24)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: '#edf5e8', fontSize: 12, fontWeight: 700 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 5]}
                      tickCount={6}
                      tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 9 }}
                      axisLine={false}
                    />
                    <Radar
                      name="个人得分"
                      dataKey="score"
                      stroke="#f0d478"
                      strokeWidth={3}
                      fill="#dceba6"
                      fillOpacity={0.34}
                      dot={{ r: 4, fill: '#f0d478', stroke: '#195f3b', strokeWidth: 2 }}
                    />
                    <Tooltip content={<RadarTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {radarData.map(({ subject, score }) => (
                  <div key={subject} className="rounded-xl border border-white/10 bg-black/10 px-3 py-2.5">
                    <p className="text-[11px] text-white/55">{subject}</p>
                    <p className="mt-1 text-lg font-black text-white">{formatScore(score)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[2rem] border border-white/90 bg-white/82 p-6 shadow-[0_18px_50px_rgba(44,72,51,.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[240px_1fr] lg:gap-12">
            <div>
              <span className="grid size-11 place-items-center rounded-2xl bg-[#e8f0e2] text-xl" aria-hidden="true">
                🌿
              </span>
              <h2 className="mt-4 text-2xl font-black text-[#244b35]">你的技术采纳特点</h2>
              <p className="mt-2 text-xs leading-5 text-[#8a948c]">为什么会得到这一结果</p>
            </div>
            <div className="space-y-4 text-[15px] leading-8 text-[#5f6f65]">
              {content.adoptionTraits.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#d9e5d3] bg-[#edf4e8] p-6 shadow-[0_18px_50px_rgba(44,72,51,.08)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#dbead3] text-xl" aria-hidden="true">
                ✓
              </span>
              <h2 className="text-2xl font-black text-[#244b35]">你的优势</h2>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-[#586b5d]">{content.advantage}</p>
          </article>

          <article className="rounded-[2rem] border border-[#eadfbe] bg-[#faf4e4] p-6 shadow-[0_18px_50px_rgba(80,68,37,.07)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#f0e4bd] text-xl" aria-hidden="true">
                ↗
              </span>
              <h2 className="text-2xl font-black text-[#66562f]">你可能卡在哪里</h2>
            </div>
            <p className="mt-5 text-[15px] leading-8 text-[#756b50]">{content.obstacle}</p>
          </article>
        </section>

        <section className="mt-5 rounded-[2rem] border border-white/90 bg-white/82 p-6 shadow-[0_18px_50px_rgba(44,72,51,.1)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.08em] text-[#66816d]">从田间实际出发</p>
            <h2 className="mt-2 text-2xl font-black text-[#244b35] sm:text-3xl">更适合你的行动建议</h2>
            <p className="mt-3 text-sm leading-6 text-[#7a877e]">
              不必一次改变全部生产方式，先从风险可控、效果可比较的环节开始。
            </p>
          </div>

          <ol className="mt-7 grid gap-4 lg:grid-cols-3">
            {content.actions.map((action, index) => (
              <li
                key={action.title}
                className="relative overflow-hidden rounded-2xl border border-[#dde5d9] bg-[#f9faf5] p-5 sm:p-6"
              >
                <span className="absolute right-4 top-2 text-6xl font-black tracking-[-0.08em] text-[#e3eadf]" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="relative grid size-9 place-items-center rounded-xl bg-[#195f3b] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="relative mt-5 text-lg font-black leading-7 text-[#2d533c]">{action.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-[#68766d]">{action.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#d8e3d3] bg-[#eaf2e5] px-5 py-4 sm:px-6">
            <span className="mt-0.5 text-lg" aria-hidden="true">🌽</span>
            <div>
              <p className="text-xs font-black tracking-[0.08em] text-[#6f806f]">行动提示</p>
              <p className="mt-1 text-sm font-bold leading-7 text-[#34563f]">{content.actionPrompt}</p>
            </div>
          </div>
        </section>

        <footer className="mt-5 rounded-[2rem] border border-[#dce3d8] bg-white/68 p-6 shadow-[0_14px_40px_rgba(44,72,51,.07)] backdrop-blur-xl sm:p-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-4xl items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e8efe3] text-sm font-black text-[#3d644b]" aria-hidden="true">
                i
              </span>
              <p className="text-sm leading-7 text-[#68766d]">
                本结果反映的是你当前面对农业新技术时的接受倾向，并不是固定不变的标签。随着技术经验增加、生产条件变化和外部支持增强，你的技术接受特征也可能发生变化。
              </p>
            </div>
            <button
              type="button"
              onClick={onRestart}
              className="flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#195f3b] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(25,95,59,.2)] transition hover:-translate-y-0.5 hover:bg-[#124d30] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#e3a62f]"
            >
              <span aria-hidden="true">↻</span>
              重新测试
            </button>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default FarmerResult
