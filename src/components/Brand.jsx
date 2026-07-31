export function Brand({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`${compact ? 'size-10' : 'size-12'} grid shrink-0 place-items-center rounded-2xl bg-[#195f3b] text-xl shadow-[0_8px_20px_rgba(25,95,59,.18)]`}
        aria-hidden="true"
      >
        🌱
      </div>
      <div className="text-left leading-tight">
        <p className="font-semibold tracking-[0.12em] text-[#195f3b]">古生片区</p>
        <p className="mt-1 text-xs text-[#6d786f]">鲜食玉米农户性格画像研究</p>
      </div>
    </div>
  )
}
