const cardProfiles = {
  创新自主型: {
    english: 'Innovative Autonomous Farmer',
    summary: '主动探索新技术，具有较强技术接受基础。',
    keywords: ['示范推广', '经验传播'],
  },
  乐观顾虑型: {
    english: 'Optimistic but Concerned Farmer',
    summary: '认可技术价值，但需要更多支持降低应用顾虑。',
    keywords: ['技术指导', '效果展示'],
  },
  谨慎观望型: {
    english: 'Cautious Observer Farmer',
    summary: '关注实际效果，更依赖案例经验。',
    keywords: ['案例示范', '降低门槛'],
  },
}

const dimensionRows = [
  { key: 'optimism', label: '乐观性' },
  { key: 'innovativeness', label: '创新性' },
  { key: 'discomfort', label: '不适感' },
  { key: 'insecurity', label: '不安全感' },
]

function formatScore(score) {
  return Number.isFinite(score) ? score.toFixed(2) : '--'
}

function progressWidth(score) {
  if (!Number.isFinite(score)) return 0
  return Math.min(100, Math.max(0, (score / 5) * 100))
}

export function ProfileCard({ type, scores }) {
  const profile = cardProfiles[type] ?? {
    english: 'Green Technology Adoption Farmer',
    summary: '结合技术准备度特征，形成绿色技术采纳倾向画像。',
    keywords: ['技术支持', '绿色采纳'],
  }

  return (
    <article
      id="farmer-profile-card"
      className="relative mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] bg-[#f7f4e9] text-[#173e2b] shadow-[0_28px_70px_rgba(33,73,48,.2)] sm:aspect-[4/5]"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#dce8c9]/80" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 size-80 rounded-full bg-[#eadfb8]/65" />
      <div className="pointer-events-none absolute inset-0 border-[10px] border-white/35" />

      <header className="relative bg-[#195f3b] px-6 py-6 text-white sm:px-9 sm:py-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-lg font-black tracking-[-0.02em] sm:text-xl">🌱 我的绿色技术采纳画像</p>
            <p className="mt-2 text-[11px] leading-5 text-white/60">
              基于TRI 2.0–K-means模型的绿色技术采纳画像
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#dfeccf]">
            PROFILE
          </span>
        </div>
      </header>

      <div className="relative flex flex-1 flex-col px-6 py-6 sm:px-9 sm:py-7">
        <section className="border-b border-[#dfe4d8] pb-5">
          <p className="text-xs font-bold text-[#839087]">农户类型</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#195f3b] sm:text-4xl">{type}</h2>
          <p className="mt-1.5 text-xs font-semibold tracking-wide text-[#6e7f73] sm:text-sm">
            {profile.english}
          </p>
        </section>

        <section className="mt-5">
          <div className="flex items-end justify-between">
            <h3 className="text-sm font-black text-[#345640]">技术准备度</h3>
            <span className="text-[10px] text-[#9aa39d]">1–5分</span>
          </div>

          <div className="mt-3 grid gap-x-5 gap-y-3 sm:grid-cols-2">
            {dimensionRows.map(({ key, label }) => {
              const score = scores?.[key]

              return (
                <div key={key}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#596b5f]">{label}</span>
                    <span className="font-mono font-black text-[#195f3b]">{formatScore(score)}</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#dfe5db]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2b724b] to-[#94b36f]"
                      style={{ width: `${progressWidth(score)}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-[#dce4d6] bg-white/65 px-5 py-4">
          <p className="text-[10px] font-black tracking-[0.14em] text-[#89938c]">核心画像</p>
          <p className="mt-2 text-base font-black leading-7 text-[#2e5139]">{profile.summary}</p>
        </section>

        <section className="mt-5">
          <p className="text-[10px] font-black tracking-[0.14em] text-[#89938c]">推广关键词</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-[#dfead7] px-3.5 py-2 text-xs font-black text-[#3f634a]">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <footer className="mt-auto flex items-end justify-between gap-5 border-t border-[#dfe4d8] pt-5">
          <div>
            <p className="text-[10px] font-bold text-[#929c95]">基于</p>
            <p className="mt-1 text-[11px] font-bold leading-5 text-[#647168]">
              TRI 2.0技术准备度模型
              <br />
              K-means聚类分析
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-black tracking-[0.12em] text-[#477057]">古生片区</p>
            <p className="mt-1 text-[9px] text-[#99a19b]">鲜食玉米绿色技术研究</p>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default ProfileCard
