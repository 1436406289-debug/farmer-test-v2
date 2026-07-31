import { AnswerOption } from './AnswerOption'
import { Brand } from './Brand'
import { ProgressBar } from './ProgressBar'

export function QuizPage({
  questions,
  currentIndex,
  answers,
  onSelectAnswer,
  onPrevious,
  onNext,
  onBackHome,
  onComplete,
  isPredicting,
  predictionError,
}) {
  const question = questions[currentIndex]
  const selectedScore = answers[question.id]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === questions.length - 1

  const handleNext = () => {
    if (isLast) {
      onComplete()
      return
    }
    onNext()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f1e8] text-[#173e2b]">
      <div className="quiz-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="absolute -right-24 top-20 size-80 rounded-full bg-[#dce8ca]/60 blur-3xl" />
      <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-[#eee0b8]/55 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between py-5 sm:py-7">
          <button type="button" onClick={onBackHome} className="rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#e3a62f]" aria-label="返回首页">
            <Brand compact />
          </button>
          <button
            type="button"
            onClick={onBackHome}
            className="rounded-xl border border-[#d9ded2] bg-white/60 px-4 py-2 text-sm font-semibold text-[#637168] backdrop-blur transition hover:border-[#b4c3ae] hover:text-[#245a3c]"
          >
            暂存并退出
          </button>
        </header>

        <div className="mx-auto grid w-full max-w-5xl flex-1 items-start gap-7 pb-10 pt-4 lg:grid-cols-[250px_1fr] lg:gap-12 lg:pt-8">
          <aside className="lg:sticky lg:top-8">
            <ProgressBar current={currentIndex + 1} total={questions.length} />

            <div className="mt-7 hidden rounded-3xl border border-[#dde2d7] bg-white/50 p-5 text-sm leading-6 text-[#6f7b73] backdrop-blur lg:block">
              <span className="mb-3 grid size-10 place-items-center rounded-xl bg-[#edf2e7] text-lg" aria-hidden="true">💡</span>
              <p className="font-bold text-[#355843]">凭第一感受作答</p>
              <p className="mt-1 text-xs leading-5">本测试没有标准答案，请选择最符合您真实想法的选项。</p>
            </div>

            <div className="mt-5 hidden items-center gap-2 text-xs text-[#889188] lg:flex">
              <span className="size-2 rounded-full bg-[#82a66f]" />
              每次选择都会自动保存
            </div>
          </aside>

          <section className="rounded-[2rem] border border-white/90 bg-white/78 p-5 shadow-[0_25px_70px_rgba(46,72,52,.12)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#eaf1e3] px-3 py-1.5 text-xs font-bold tracking-[0.08em] text-[#4d725b]">
                第 {currentIndex + 1} / {questions.length} 题
              </span>
              <span className="text-xs text-[#a0a7a1]">单选题</span>
            </div>

            <div key={question.id} className="question-enter">
              <h1 className="mb-3 mt-8 text-[clamp(1.65rem,3.5vw,2.45rem)] font-black leading-[1.35] tracking-[-0.03em] text-[#1d402d]">
                {question.question}
              </h1>
              <p className="mb-7 text-sm text-[#89928b] sm:mb-8">请选择最符合您实际情况的一项</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {question.options.map((option, index) => (
                  <div key={option.value} className={index === question.options.length - 1 ? 'sm:col-span-2' : ''}>
                    <AnswerOption
                      label={option.label}
                      value={option.value}
                      selected={selectedScore === option.value}
                      onSelect={() => onSelectAnswer(option.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#e5e8df] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onPrevious}
                disabled={isFirst}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold text-[#617067] transition hover:bg-[#f1f3ed] disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
              >
                <span aria-hidden="true">←</span> 上一题
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedScore || isPredicting}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#195f3b] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(25,95,59,.2)] transition hover:-translate-y-0.5 hover:bg-[#124d30] disabled:cursor-not-allowed disabled:translate-y-0 disabled:bg-[#bac4bb] disabled:shadow-none sm:w-auto"
              >
                {isLast
                  ? isPredicting
                    ? '正在生成画像…'
                    : '生成我的绿色技术采纳画像'
                  : '下一题'}{' '}
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {predictionError && (
              <div role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {predictionError}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
