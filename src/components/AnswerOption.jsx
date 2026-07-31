export function AnswerOption({ value, label, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group flex min-h-[74px] w-full items-center gap-4 rounded-2xl border px-4 text-left transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#e3a62f] sm:px-5 ${
        selected
          ? 'border-[#2d714c] bg-[#edf4e8] shadow-[0_8px_24px_rgba(42,101,69,.1)]'
          : 'border-[#e2e6dd] bg-white hover:-translate-y-0.5 hover:border-[#abc19f] hover:shadow-[0_8px_24px_rgba(35,70,48,.08)]'
      }`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold transition ${
          selected ? 'bg-[#286b46] text-white' : 'bg-[#f1f3ed] text-[#667269] group-hover:bg-[#e8eee2]'
        }`}
      >
        {value}
      </span>
      <span className="flex-1">
        <span className={`block text-[15px] font-bold ${selected ? 'text-[#1f5d3d]' : 'text-[#3e4b43]'}`}>{label}</span>
        <span className="mt-0.5 block text-xs text-[#a0a7a1]">{value} 分</span>
      </span>
      <span
        className={`grid size-6 place-items-center rounded-full border-2 transition ${
          selected ? 'border-[#2d714c] bg-[#2d714c] text-xs text-white' : 'border-[#d8ded8] text-transparent'
        }`}
        aria-hidden="true"
      >
        ✓
      </span>
    </button>
  )
}
