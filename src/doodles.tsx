import type { CategoryId, Shape } from './content'

// Hand-drawn group shapes: coloured fill with a wobbly outline

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const shapePaths: Record<Shape, string> = {
  circle: 'M19 3.5 C 29 3, 35 10, 34.5 19 C 34 28.5, 27 35, 18 34.5 C 8.5 34, 3 27, 3.5 18 C 4 9.5, 10 3.5, 20.5 4.5',
  square: 'M4.5 5.5 L32 3.5 L33.5 31.5 L5 33 Z',
  triangle: 'M18.5 3.5 L34 31.5 L3.5 32.5 Z',
  diamond: 'M18 2.5 L34 18.5 L17.5 34 L2.5 18 Z',
  hexagon: 'M10.5 3.5 L26 3 L34 17.5 L26.5 32.5 L10 33 L2.5 18 Z',
}

export function SketchShape({ shape, color, className = 'h-10 w-10' }: { shape: Shape; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 37 37" aria-hidden="true" className={className}>
      <path d={shapePaths[shape]} className={color} transform="translate(2 2)" />
      <path {...stroke} d={shapePaths[shape]} />
    </svg>
  )
}

// Faint line icons for backgrounds: ideas, thinking, questions, making
const ideaPaths: Record<string, string[]> = {
  bulb: [
    'M20 5 C 12 5, 9 12, 11 18 C 12 22, 15 24, 15 28 L 25 28 C 25 24, 28 22, 29 18 C 31 12, 28 5, 20 5 Z',
    'M16 32 L24 32',
    'M17.5 35.5 L22.5 35.5',
  ],
  think: [
    'M9 21 C 4 21, 4 13, 10 13 C 10 7, 19 5, 22 10 C 27 6, 35 10, 32 16 C 37 18, 35 25, 29 24 C 27 28, 17 28, 16 24 C 13 26, 9 25, 9 21 Z',
    'M8 30 L8.5 30.5',
    'M4 35 L4.3 35.3',
  ],
  question: ['M14 13 C 14 6, 27 6, 26 13 C 25.5 18, 20 18, 20 24', 'M20 31 L20 31.5'],
  puzzle: ['M6 12 L15 12 C 13 7, 22 7, 20 12 L29 12 L29 20 C 34 18.5, 34 27, 29 25 L29 33 L6 33 Z'],
  pencil: ['M8 33 L10 25 L28 7 L34 13 L16 31 Z', 'M10 25 L16 31'],
  code: ['M13 10 L5 20 L13 30', 'M27 10 L35 20 L27 30'],
  cursor: ['M11 5 L11 30 L17 24 L22 34 L26 32 L21 22 L29 22 Z'],
  spark: ['M20 4 Q 21.5 18 36 20 Q 21.5 22 20 36 Q 18.5 22 4 20 Q 18.5 18 20 4 Z'],
}

export type Idea = keyof typeof ideaPaths

export function IdeaIcon({ name, className }: { name: Idea; className: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={`pointer-events-none absolute text-zinc-200 ${className}`}>
      {ideaPaths[name].map((d) => (
        <path key={d} {...stroke} strokeWidth={2.5} vectorEffect="non-scaling-stroke" d={d} />
      ))}
    </svg>
  )
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
