import { Brand } from './Brand'

const homeContent = {
  researchBadge: '基于古生片区203户农户调研',
  eyebrow: '聊聊你平时是怎样看待新技术的',
  titlePrefix: '每位农户，都有',
  titleHighlight: '自己的技术选择方式',
  description:
    '有人愿意先试一试，有人更看重实际效果，也有人习惯先听听身边人的经验。回答几个熟悉的生产问题，看看你更接近哪一种技术采纳类型。',
  actionLabel: '看看我属于哪一类',
  actionHint: '从熟悉的生产经验开始',
  answerNote: '请按照你平时真实的生产经验和想法选择。',
  closing:
    '了解差异，不是为了给农户贴标签，而是为了提供更合适的技术服务。',
  conversations: [
    {
      speaker: '农户的想法',
      text: '新技术效果不错，我愿意先拿一小块地试试。',
      tone: 'green',
    },
    {
      speaker: '另一种考虑',
      text: '我得先看看别人用了以后，产量和成本怎么样。',
      tone: 'earth',
    },
  ],
  valueCards: [
    {
      icon: 'portrait',
      number: '01',
      title: '了解你的技术选择习惯',
      description:
        '看看你面对一项新技术时，更看重实际效果、操作难度，还是他人的使用经验。',
    },
    {
      icon: 'guidance',
      number: '02',
      title: '获得更适合的技术建议',
      description:
        '不同类型农户需要的支持并不相同，结果会提供更有针对性的行动建议。',
    },
    {
      icon: 'leaf',
      number: '03',
      title: '不是给农户贴标签',
      description:
        '画像反映的是你当前的技术接受倾向，会随着经验和生产条件变化。',
    },
  ],
}

function ResearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path d="M6 4.5h9.5A2.5 2.5 0 0 1 18 7v12H8.5A2.5 2.5 0 0 1 6 16.5v-12Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8h6M9 11h6M9 14h3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 8.5h1.5v11H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function HomeHeader() {
  return (
    <header className="flex flex-col items-start gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7">
      <Brand />
      <div className="flex items-center gap-2 self-end rounded-full border border-[#d8dfce] bg-[#fbfaf3]/80 px-3 py-2 text-[11px] font-bold leading-4 text-[#587061] shadow-[0_8px_24px_rgba(52,78,55,.06)] sm:self-auto sm:px-4 sm:text-xs">
        <ResearchIcon />
        <span>{homeContent.researchBadge}</span>
      </div>
    </header>
  )
}

function ConversationBubble({ conversation, className = '' }) {
  const toneClasses = {
    green: 'border-[#cadbc3] bg-[#f7faf3] text-[#335844]',
    earth: 'border-[#dfd1b5] bg-[#fbf6e9] text-[#65583f]',
    yellow: 'border-[#e5d291] bg-[#fff9df] text-[#64552a]',
  }

  return (
    <div
      className={`home-float rounded-[1.25rem_1.25rem_1.25rem_.35rem] border px-4 py-3 shadow-[0_12px_32px_rgba(45,71,49,.1)] ${toneClasses[conversation.tone]} ${className}`}
    >
      <p className="text-[10px] font-black tracking-[0.1em] opacity-55">{conversation.speaker}</p>
      <p className="mt-1.5 text-xs font-bold leading-5 sm:text-[13px]">“{conversation.text}”</p>
    </div>
  )
}

function FarmerIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[570px] pb-12 pt-9 sm:pb-16 lg:pb-12 lg:pt-5">
      <div className="absolute left-[7%] top-[1%] z-20 w-[58%] sm:w-[53%]">
        <ConversationBubble conversation={homeContent.conversations[0]} />
      </div>
      <div className="absolute right-[1%] top-[27%] z-20 w-[55%] sm:w-[51%]">
        <ConversationBubble conversation={homeContent.conversations[1]} className="home-float-delayed" />
      </div>

      <div className="relative mt-16 overflow-hidden rounded-[3rem_1.4rem_3.5rem_2rem] border border-white/80 bg-[#e8eed7] shadow-[0_28px_70px_rgba(39,72,48,.16)] sm:mt-14">
        <svg viewBox="0 0 620 500" className="block h-auto w-full" role="img" aria-labelledby="field-scene-title">
          <title id="field-scene-title">鲜食玉米田间、村庄与苍山景观</title>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f8f4df" />
              <stop offset="1" stopColor="#dfe9cd" />
            </linearGradient>
            <linearGradient id="field" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#97b46d" />
              <stop offset="1" stopColor="#5f8a58" />
            </linearGradient>
          </defs>

          <rect width="620" height="500" fill="url(#sky)" />
          <circle cx="505" cy="82" r="38" fill="#efd071" opacity=".72" />
          <path d="M0 188C80 145 124 152 190 106c54 45 98 57 147 60 64 5 117-41 174-18 47 19 81 24 109 21v112H0Z" fill="#b7c9a2" opacity=".72" />
          <path d="M0 224c84-41 143-30 212-64 57 45 100 57 154 53 80-7 129-26 254 18v98H0Z" fill="#809f72" opacity=".48" />
          <path d="M0 265c116-25 190 16 290-8 121-28 201-31 330 4v70H0Z" fill="#a8c6bb" opacity=".82" />

          <g fill="#f7f2df" opacity=".94">
            <path d="M35 225h62v39H35zM43 211h46l18 15H26z" />
            <path d="M118 238h48v29h-48zM124 227h37l13 12h-64z" />
          </g>
          <g stroke="#69886d" strokeWidth="4" strokeLinecap="round" opacity=".8">
            <path d="M82 212v53M144 228v40" />
          </g>

          <path d="M0 300c105-35 198-12 285 3 112 19 217-28 335-5v202H0Z" fill="url(#field)" />
          <g fill="none" strokeLinecap="round">
            <path d="M-20 475C134 362 284 347 650 369" stroke="#d5c083" strokeWidth="22" opacity=".55" />
            <path d="M-10 515C153 395 334 383 662 410" stroke="#e7d59a" strokeWidth="18" opacity=".65" />
            <path d="M34 500c112-93 228-113 376-112" stroke="#466f4d" strokeWidth="3" opacity=".45" strokeDasharray="4 14" />
          </g>

          <g className="home-leaf-sway" transform="translate(56 270)">
            <path d="M29 172C24 108 26 55 34 2" stroke="#345f3c" strokeWidth="7" strokeLinecap="round" />
            <path d="M31 100C5 80 0 57 4 42c24 7 38 22 31 57" fill="#5f944d" />
            <path d="M31 73c25-24 43-29 58-25-3 23-24 42-58 44" fill="#79a75c" />
            <path d="M31 133C7 117 0 101 2 83c24 5 39 20 33 49" fill="#6da258" />
            <path d="M32 118c24-22 42-26 54-21-5 23-22 35-53 38" fill="#8aaf65" />
            <path d="M22 46c1-17 8-30 15-36 8 9 9 24 2 38Z" fill="#e9bd43" />
          </g>

          <g className="home-leaf-sway home-leaf-sway-delayed" transform="translate(505 292) scale(.82)">
            <path d="M29 172C24 108 26 55 34 2" stroke="#345f3c" strokeWidth="7" strokeLinecap="round" />
            <path d="M31 100C5 80 0 57 4 42c24 7 38 22 31 57" fill="#5f944d" />
            <path d="M31 73c25-24 43-29 58-25-3 23-24 42-58 44" fill="#79a75c" />
            <path d="M31 133C7 117 0 101 2 83c24 5 39 20 33 49" fill="#6da258" />
            <path d="M32 118c24-22 42-26 54-21-5 23-22 35-53 38" fill="#8aaf65" />
            <path d="M22 46c1-17 8-30 15-36 8 9 9 24 2 38Z" fill="#e9bd43" />
          </g>

          <g fill="none" stroke="#f5e5a9" strokeLinecap="round" opacity=".72">
            <path d="M178 365c70-45 154-56 261-28" strokeWidth="3" strokeDasharray="3 10" />
            <path d="M160 390c91-55 194-67 322-28" strokeWidth="2" strokeDasharray="2 11" />
          </g>
        </svg>

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/65 bg-[#f8f5e9]/88 px-3 py-2 text-[11px] font-bold text-[#526653] shadow-sm backdrop-blur sm:bottom-7 sm:left-7">
          <span className="size-2 rounded-full bg-[#d8a939]" />
          田间观察 · 真实经验
        </div>
      </div>
    </div>
  )
}

function StartAction({ answeredCount, totalQuestions, onStart }) {
  const hasProgress = answeredCount > 0

  return (
    <div className="mt-8 sm:mt-9">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onStart}
          aria-label={hasProgress ? '继续回答问题，看看我属于哪一类农户' : '开始回答问题，看看我属于哪一类农户'}
          className="group flex min-h-14 w-full items-center justify-between gap-6 rounded-[1.2rem_.65rem_1.2rem_.65rem] bg-[#195f3b] px-6 py-3.5 text-left text-white shadow-[0_16px_34px_rgba(25,95,59,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#124d30] active:translate-y-0 active:scale-[.99] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#e3a62f] sm:w-auto sm:min-w-[300px]"
        >
          <span>
            <span className="block text-base font-black">
              {hasProgress ? '继续看看我属于哪一类' : homeContent.actionLabel}
            </span>
            <span className="mt-0.5 block text-[11px] font-medium text-white/60">
              {hasProgress ? `已保存 ${answeredCount}/${totalQuestions} 个回答` : homeContent.actionHint}
            </span>
          </span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/12 text-lg transition duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </button>

        <div className="pl-1 text-sm text-[#66746b] sm:pl-0">
          <p className="font-bold text-[#425d4c]">{totalQuestions}个简单问题，没有标准答案</p>
          <p className="mt-1 text-xs text-[#859087]">{homeContent.answerNote}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-[#77847b]">
        {['没有标准答案', '约3分钟完成', '结果仅用于技术服务参考'].map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#91ad70]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ValueIcon({ name }) {
  if (name === 'portrait') {
    return (
      <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M7 26c1.5-5 4.6-7.5 9-7.5s7.5 2.5 9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 6v20M28 6v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".35" />
      </svg>
    )
  }

  if (name === 'guidance') {
    return (
      <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
        <path d="M5 24c6-6 11-9 22-13M7 14c5 0 8 2 10 6M19 7c0 5 2 8 6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="24" r="2.5" fill="currentColor" />
        <circle cx="26" cy="10" r="2.5" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" className="size-6" fill="none" aria-hidden="true">
      <path d="M16 27V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18C9 18 6 14 6 8c7 0 10 4 10 10ZM16 14c6 0 10-3 11-9-7-1-11 3-11 9Z" fill="currentColor" opacity=".72" />
    </svg>
  )
}

function ValueCards() {
  return (
    <section aria-labelledby="home-values-title" className="pb-9 pt-5 sm:pb-12 sm:pt-8">
      <div className="mb-5 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-black tracking-[0.14em] text-[#7c8b80]">这次交流能带来什么</p>
          <h2 id="home-values-title" className="mt-2 text-2xl font-black text-[#244b35]">
            从真实经验出发，找到合适的下一步
          </h2>
        </div>
        <div className="hidden h-px flex-1 bg-[#dce2d4] md:block" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {homeContent.valueCards.map((card, index) => (
          <article
            key={card.title}
            className={`home-value-card border border-[#e0e4d8] bg-[#fbfaf3]/78 p-5 shadow-[0_14px_35px_rgba(48,71,51,.06)] sm:p-6 ${
              index === 1 ? 'rounded-[1rem_2rem_1rem_2rem]' : index === 2 ? 'rounded-[2rem_1rem_2rem_1rem]' : 'rounded-[1.7rem_1rem_1.7rem_1rem]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#e6eedc] text-[#376145]">
                <ValueIcon name={card.icon} />
              </span>
              <span className="text-xs font-black text-[#c2b77f]">{card.number}</span>
            </div>
            <h3 className="mt-5 text-base font-black text-[#2d5039]">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6d796f]">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function HomePage({ answeredCount, totalQuestions, onStart }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4ea] text-[#173e2b]">
      <div className="home-paper-lines pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute -right-36 -top-40 size-[500px] rounded-full bg-[#dce7c5]/55 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -left-36 size-[520px] rounded-full bg-[#eadfb4]/50 blur-3xl" />
      <svg className="pointer-events-none absolute left-0 top-[38%] hidden h-44 w-48 text-[#9cad87] opacity-20 lg:block" viewBox="0 0 190 180" fill="none" aria-hidden="true">
        <path d="M-25 156C37 106 87 87 197 93M-35 181C48 126 103 116 210 123M8 126c17-37 39-66 74-93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 10" />
        <path d="M73 54c-25-5-39-20-44-43 26 2 43 16 44 43ZM75 72c28-18 52-20 72-8-19 25-41 31-72 20Z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <HomeHeader />

        <section className="grid items-center gap-7 pb-9 pt-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pb-12 lg:pt-8 xl:gap-16">
          <div className="home-reveal max-w-[720px]">
            <div className="inline-flex items-center gap-2 text-sm font-black text-[#50705c]">
              <span className="relative flex size-7 items-center justify-center" aria-hidden="true">
                <span className="absolute size-7 rounded-full bg-[#dfe9d5]" />
                <span className="relative">🌽</span>
              </span>
              {homeContent.eyebrow}
            </div>

            <h1 className="mt-5 max-w-[710px] text-[clamp(2.35rem,5vw,4.5rem)] font-black leading-[1.1] tracking-[-0.055em] text-[#143c29] lg:text-[clamp(2.8rem,4.8vw,4.25rem)]">
              {homeContent.titlePrefix}
              <br />
              <span className="relative inline-block text-[#247147]">
                <span className="sm:whitespace-nowrap">{homeContent.titleHighlight}</span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#d9bd58] opacity-65" viewBox="0 0 420 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 9c101-7 253-7 414 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5d6a62] sm:text-lg sm:leading-9">
              {homeContent.description}
            </p>

            <StartAction
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
              onStart={onStart}
            />
          </div>

          <FarmerIllustration />
        </section>

        <div className="flex items-start gap-3 border-y border-[#dce1d4] py-4 text-sm font-bold leading-6 text-[#496351] sm:items-center sm:justify-center sm:text-center">
          <span className="mt-1 size-2 shrink-0 rounded-full bg-[#d5a63b] sm:mt-0" />
          <p>{homeContent.closing}</p>
        </div>

        <ValueCards />

        <footer className="flex flex-col gap-2 border-t border-[#dce0d2] py-5 text-xs text-[#879087] sm:flex-row sm:items-center sm:justify-between">
          <span>古生片区鲜食玉米绿色技术研究</span>
          <span>研究辅助：TRI 2.0 · 数据仅保存在当前设备</span>
        </footer>
      </div>
    </main>
  )
}
