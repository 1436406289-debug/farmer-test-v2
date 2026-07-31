import { Brand } from './Brand'

const typeProfiles = {
  创新自主型: {
    english: 'Innovative Autonomous Farmer',
    description:
      '该类型农户具有较强的新技术接受能力，愿意主动了解和尝试新的技术，对技术价值具有较积极的认识。',
    advice: '适合作为新技术示范对象，通过实践经验带动其他农户。',
    badge: '技术先行者',
  },
  乐观顾虑型: {
    english: 'Optimistic but Concerned Farmer',
    description:
      '该类型农户认可技术带来的价值，但在技术应用过程中仍存在一定顾虑。',
    advice: '需要加强技术展示、操作指导和风险降低。',
    badge: '价值认同者',
  },
  谨慎观望型: {
    english: 'Cautious Observer Farmer',
    description:
      '该类型农户对新技术接受较为谨慎，更加关注实际效果和使用经验。',
    advice: '应通过案例示范和周围农户经验降低采用门槛。',
    badge: '稳健观察者',
  },
}

const dimensions = [
  { name: '乐观性', description: '对技术价值的积极认识', color: 'from-[#d5a63d] to-[#e7c76e]' },
  { name: '创新性', description: '主动学习和尝试的倾向', color: 'from-[#28714a] to-[#79a96b]' },
  { name: '不适感', description: '使用技术时的压力感受', color: 'from-[#c6833b] to-[#dda566]' },
  { name: '不安全感', description: '面对技术风险时的顾虑', color: 'from-[#9c654c] to-[#c49175]' },
]

function formatScore(score) {
  return Number.isFinite(score) ? score.toFixed(2) : '--'
}

function scoreWidth(score) {
  if (!Number.isFinite(score)) return 0
  return Math.min(100, Math.max(0, (score / 5) * 100))
}

export function Result({ type, dimension, distance, onRestart }) {
  const profile = typeProfiles[type] ?? {
    english: 'Farmer Technology Adoption Profile',
    description: '已根据您的作答生成绿色技术采纳画像。',
    advice: '建议结合实际生产情况，选择适合自己的绿色技术。',
    badge: '绿色技术采纳画像',
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f1e8] px-5 py-6 text-[#173e2b] sm:px-8 sm:py-8">
      <div className="field-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute -right-32 -top-24 size-[460px] rounded-full bg-[#dce8ca]/75 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 size-[500px] rounded-full bg-[#eee0b8]/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Brand compact />
          <span className="hidden rounded-full border border-[#d8dfd2] bg-white/65 px-4 py-2 text-xs font-bold text-[#617168] sm:block">
            TRI 2.0 · K-means 画像
          </span>
        </header>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/90 bg-white/82 shadow-[0_28px_80px_rgba(44,72,51,.14)] backdrop-blur-xl sm:mt-10">
          <div className="relative overflow-hidden bg-[#195f3b] px-6 py-9 text-white sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full border-[42px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-24 right-24 size-48 rounded-full bg-[#87ad69]/15 blur-2xl" />

            <div className="relative">
              <p className="text-sm font-bold tracking-[0.08em] text-white/75">
                🌱 您的绿色技术采纳画像
              </p>

              <div className="mt-7 flex flex-col justify-between gap-7 md:flex-row md:items-end">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-[#dfeccf]">
                    {profile.badge}
                  </span>
                  <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                    {type}
                  </h1>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-[#c7ddc2] sm:text-base">
                    {profile.english}
                  </p>
                </div>

                <div className="w-fit rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <p className="text-xs text-white/60">聚类匹配距离</p>
                  <p className="mt-1 font-mono text-xl font-bold">
                    {Number.isFinite(distance) ? distance.toFixed(4) : '--'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#e1e6dc] bg-[#fafaf6] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#e9f0e3] text-lg" aria-hidden="true">
                    ◉
                  </span>
                  <h2 className="font-black text-[#2b5039]">画像解读</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#657269]">{profile.description}</p>
              </article>

              <article className="rounded-2xl border border-[#e5dfca] bg-[#f8f3e4] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#eee3bd] text-lg" aria-hidden="true">
                    ✦
                  </span>
                  <h2 className="font-black text-[#66562f]">推广建议</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#766c51]">{profile.advice}</p>
              </article>
            </div>

            <div className="mt-9">
              <div>
                <p className="text-xs font-black tracking-[0.16em] text-[#8a948c]">TRI DIMENSIONS</p>
                <h2 className="mt-2 text-2xl font-black text-[#244b35]">四维技术准备度</h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {dimensions.map(({ name, description, color }, index) => {
                  const score = dimension?.[name]

                  return (
                    <article key={name} className="rounded-2xl border border-[#e1e6dc] bg-white p-5 shadow-[0_8px_24px_rgba(45,73,52,.05)]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-black text-[#b1a875]">0{index + 1}</p>
                          <h3 className="mt-2 font-black text-[#355a42]">{name}</h3>
                          <p className="mt-1 text-xs text-[#8a948c]">{description}</p>
                        </div>
                        <p className="text-2xl font-black text-[#195f3b]">{formatScore(score)}</p>
                      </div>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e6eae2]">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${color} transition-[width] duration-700`}
                          style={{ width: `${scoreWidth(score)}%` }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-[#a2aaa4]">
                        <span>1</span>
                        <span>5</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex justify-center border-t border-[#e3e7df] pt-7">
              <button
                type="button"
                onClick={onRestart}
                className="flex min-h-13 w-full items-center justify-center gap-3 rounded-2xl bg-[#195f3b] px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(25,95,59,.2)] transition hover:-translate-y-0.5 hover:bg-[#124d30] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#e3a62f] sm:w-auto"
              >
                <span aria-hidden="true">↻</span>
                重新测试
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Result
