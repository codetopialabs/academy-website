// which page a shared piece is on (both now use the same rounded buttons)
export type Look = 'kids' | 'adults'

export function button(_look: Look, kind: 'primary' | 'secondary' = 'primary') {
  // both pages share the rounded button now
  const shape = 'rounded-full px-6 py-3'
  const colors =
    kind === 'primary'
      ? 'bg-black text-white hover:bg-zinc-800'
      : 'border border-black bg-white text-black hover:bg-zinc-100'
  // lifts on hover, presses on click (motion-safe keeps it still for reduce-motion users)
  const motion = 'transition duration-150 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg motion-safe:active:translate-y-0 motion-safe:active:scale-95'
  return `inline-flex items-center justify-center gap-2 text-sm font-bold ${motion} ${shape} ${colors}`
}
