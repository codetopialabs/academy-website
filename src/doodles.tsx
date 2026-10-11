import type { ReactNode } from 'react'
import type { CategoryId, Shape } from './content'

// Hand-drawn doodles. Paths are wobbly on purpose so they look drawn, not generated.

type DoodleProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function Underline({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth={4} d="M3 9 C 40 3, 80 13, 120 7 S 175 5, 197 8" />
      <path {...stroke} strokeWidth={2.5} d="M14 13 C 60 9, 120 15, 186 11" />
    </svg>
  )
}

// Word with a scribbled underline beneath it
export function Scribbled({ children, color = 'text-sky-300' }: { children: ReactNode; color?: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <Underline className={`absolute -bottom-[0.18em] left-[-4%] h-[0.32em] w-[108%] ${color}`} />
    </span>
  )
}

export function Arrow({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 70" aria-hidden="true" className={className}>
      <path {...stroke} d="M6 8 C 30 2, 62 10, 74 30 C 80 40, 82 50, 80 60" />
      <path {...stroke} d="M68 50 L80 62 L90 47" />
    </svg>
  )
}

export function Star({ className = '', fillClass = '' }: DoodleProps & { fillClass?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        {...stroke}
        className={fillClass}
        d="M20 3 L24.5 14.5 L37 15.5 L27 23 L30.5 36 L20 28.5 L9 35.5 L13 23 L3.5 15 L15.5 14 Z"
      />
    </svg>
  )
}

export function Sparkle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path {...stroke} d="M20 3 Q 21.5 18 37 20 Q 21.5 22 20 37 Q 18.5 22 3 20 Q 18.5 18 20 3 Z" />
    </svg>
  )
}

export function Squiggle({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 20" aria-hidden="true" className={className}>
      <path {...stroke} d="M3 12 Q 10 2 17 11 T 31 10 T 45 11 T 59 9 T 73 11 T 87 9" />
    </svg>
  )
}

export function Loop({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 50" aria-hidden="true" className={className}>
      <path
        {...stroke}
        d="M4 38 C 20 36, 30 10, 22 8 C 12 7, 18 34, 44 30 C 62 27, 58 6, 50 8 C 40 11, 52 36, 78 30 C 94 26, 92 8, 84 10 C 76 13, 90 34, 116 26"
      />
    </svg>
  )
}

export function Check({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path {...stroke} strokeWidth={3} d="M3.5 12.5 L9.5 18.5 L21 4.5" />
    </svg>
  )
}

// Wavy dashed path for the module timeline
export function Path({ className = '' }: DoodleProps) {
  return (
    <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path
        {...stroke}
        strokeDasharray="2 10"
        d="M10 20 C 120 4, 200 36, 300 20 S 480 4, 560 20 S 760 36, 840 18 S 960 10, 990 20"
      />
    </svg>
  )
}

// Sketchy versions of the group shapes: coloured fill with a hand-drawn outline
const shapePaths: Record<Shape, string> = {
  circle: 'M19 3.5 C 29 3, 35 10, 34.5 19 C 34 28.5, 27 35, 18 34.5 C 8.5 34, 3 27, 3.5 18 C 4 9.5, 10 3.5, 20.5 4.5',
  square: 'M4.5 5.5 L32 3.5 L33.5 31.5 L5 33 Z',
  triangle: 'M18.5 3.5 L34 31.5 L3.5 32.5 Z',
  diamond: 'M18 2.5 L34 18.5 L17.5 34 L2.5 18 Z',
}

export function SketchShape({ shape, color, className = 'h-10 w-10' }: { shape: Shape; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 37 37" aria-hidden="true" className={className}>
      <path d={shapePaths[shape]} className={color} transform="translate(2 2)" />
      <path {...stroke} d={shapePaths[shape]} />
    </svg>
  )
}

// Handwritten margin note
export function Note({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`font-hand text-2xl leading-tight text-zinc-700 ${className}`}>{children}</span>
}

// Hand-drawn icon for each category
const iconPaths: Record<CategoryId, string[]> = {
  foundations: ['M5 7 L35 6 L36 27 L4 28 Z', 'M17 28 L16 34', 'M24 28 L25 34', 'M11 34.5 L30 34'],
  ai: [
    'M16 7 Q 17 16 27 17.5 Q 17 19 16 29 Q 15 19 5 17.5 Q 15 16 16 7 Z',
    'M30 4 Q 30.5 8 34 8.5 Q 30.5 9 30 13 Q 29.5 9 26 8.5 Q 29.5 8 30 4 Z',
  ],
  design: ['M8 33 L10 25 L28 7 L34 13 L16 31 Z', 'M10 25 L16 31', 'M25 10 L31 16'],
  software: ['M13 10 L5 20 L13 30', 'M27 10 L35 20 L27 30', 'M23 7 L17 33'],
  hardware: [
    'M20 5 C 12 5, 9 12, 11 18 C 12 22, 15 24, 15 28 L 25 28 C 25 24, 28 22, 29 18 C 31 12, 28 5, 20 5 Z',
    'M16 32 L24 32',
    'M17.5 35.5 L22.5 35.5',
  ],
  automation: [
    'M31 15 C 28 8, 20 5, 13 8 C 8 11, 6 16, 7 21',
    'M31 15 L32 8',
    'M31 15 L24 14',
    'M9 26 C 12 32, 20 35, 27 32 C 32 29, 34 24, 33 19',
    'M9 26 L8 33',
    'M9 26 L16 27',
  ],
}

export function CategoryIcon({ id, className = 'h-9 w-9' }: { id: CategoryId; className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      {iconPaths[id].map((d) => (
        <path key={d} {...stroke} d={d} />
      ))}
    </svg>
  )
}
