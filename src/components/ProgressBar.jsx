export function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full" aria-label={`答题进度 ${percent}%`}>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <span className="text-sm font-bold text-[#557060]">答题进度</span>
          <span className="ml-3 text-sm text-[#9aa29c]">{percent}%</span>
        </div>
        <span className="text-sm text-[#7b857e]">
          <strong className="text-base text-[#23543a]">{current}</strong> / {total}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#e0e5db]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#2d734c] to-[#8aac68] transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
