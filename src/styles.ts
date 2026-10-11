export const dots = {
  backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

// kids pages use rounded corners, the adults page uses sharp ones
export type Look = 'kids' | 'adults'

export function button(look: Look, kind: 'primary' | 'secondary' = 'primary') {
  const shape = look === 'kids' ? 'rounded-full px-6 py-3' : 'px-5 py-3'
  const colors =
    kind === 'primary'
      ? 'bg-black text-white hover:bg-zinc-800'
      : 'border border-black bg-transparent text-black hover:bg-black/5'
  return `inline-flex items-center justify-center gap-2 text-sm font-bold transition-colors ${shape} ${colors}`
}
