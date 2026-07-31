import { Brand } from './Brand'

const dimensionDetails = {
  乐观性: '对技术改善生活与生产价值的积极期待',
  创新性: '主动了解、学习和尝试新技术的倾向',
  不适感: '面对复杂技术时感受到的掌控压力',
  不安全感: '对技术依赖及潜在风险的顾虑程度',
}

export function ResultPage({ result, onBackHome, onReview }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f1e8] px-5 py-6 text-[#173e2b] sm:px-8 sm:py-8">
      <div className="field-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute -right-28 -top-20 size-[420px] rounded-full bg-[#dce8ca]/70 blur-3xl" />
      <div className="absolute -bottom-36 -left-28 size-[460px] rounded-full bg-[#eee0b8]/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Brand compact />
          <span className="rounded-full border border-[#d8dfd2] bg-white/65 px-4 py-2 text-xs font-bold text-[#617168]">
            TRI 2.0 画像结果
          </span>
        </header>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-white/90 bg-white/80 shadow-[0_28px_80px_rgba(44,72,51,.14)] backdrop-blur-xl">
          <div className="bg-[#195f3b] px-6 py-9 text-white sm:px-10 sm:py-11">
            <p className="text-xs font-bold tracking-[0.2em] text-white/65">您的绿色技术采纳画像</p>
            <div className="mt-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm text-white/70">分类类型</p>
                <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{result.type}</h1>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">
                <p className="text-xs text-white/60">聚类中心距离</p>
                <p className="mt-1 font-mono text-xl font-bold">{result.distance.toFixed(4)}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div>
              <p className="text-xs font-black tracking-[0.16em] text-[#8a948c]">四维得分</p>
              <h2 className="mt-2 text-2xl font-black text-[#244b35]">您的技术准备度构成</h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Object.entries(result.dimension).map(([dimension, score]) => (
                <div key={dimension} className="rounded-2xl border border-[#e1e6dc] bg-[#fafaf6] p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#355a42]">{dimension}</p>
                    <p className="text-2xl font-black text-[#195f3b]">{score.toFixed(2)}</p>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e3e8df]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2d734c] to-[#95b36e]"
                      style={{ width: `${(score / 5) * 100}%` }}
                    />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#7d8880]">{dimensionDetails[dimension]}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#e3e7df] pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onReview}
                className="min-h-12 rounded-xl border border-[#cfd8ce] px-5 text-sm font-bold text-[#53675a] transition hover:bg-[#f1f3ed]"
              >
                返回查看答案
              </button>
              <button
                type="button"
                onClick={onBackHome}
                className="min-h-12 rounded-xl bg-[#195f3b] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(25,95,59,.18)] transition hover:bg-[#124d30]"
              >
                返回首页
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
