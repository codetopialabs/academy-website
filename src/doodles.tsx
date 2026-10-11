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

// Faint line icons for backgrounds: things kids meet when they learn to code
const ideaPaths: Record<string, string[]> = {
  blocks: [
    'M4 8 L12 8 L14 10 L18 10 L20 8 L34 8 L34 16 L20 16 L18 18 L14 18 L12 16 L4 16 Z',
    'M8 21 L16 21 L18 23 L22 23 L24 21 L36 21 L36 29 L24 29 L22 31 L18 31 L16 29 L8 29 Z',
  ],
  controller: [
    'M10 14 L30 14 C 36 14, 38 30, 33 31 C 30 32, 28 26, 24 26 L16 26 C 12 26, 10 32, 7 31 C 2 30, 4 14, 10 14 Z',
    'M12 17.5 L12 22.5',
    'M9.5 20 L14.5 20',
    'M27 18 L27.3 18.3',
    'M30.5 21.5 L30.8 21.8',
  ],
  robot: [
    'M10 12 L30 12 L30 30 L10 30 Z',
    'M20 12 L20 7',
    'M20 5 L20.3 5.3',
    'M15.5 19 L15.8 19.3',
    'M24.5 19 L24.8 19.3',
    'M15 25 L25 25',
    'M10 21 L6.5 21',
    'M30 21 L33.5 21',
  ],
  bug: [
    'M20 13 C 27 13, 28 20, 28 24 C 28 31, 24 34, 20 34 C 16 34, 12 31, 12 24 C 12 20, 13 13, 20 13 Z',
    'M16 13 C 16 9, 24 9, 24 13',
    'M20 15 L20 34',
    'M12 20 L6 17', 'M12 26 L5 26', 'M13 31 L7 34',
    'M28 20 L34 17', 'M28 26 L35 26', 'M27 31 L33 34',
    'M18 10 L15 5', 'M22 10 L25 5',
  ],
  braces: [
    'M15 6 C 10 6, 12 14, 10 18 C 9 19, 7 20, 6 20 C 7 20, 9 21, 10 22 C 12 26, 10 34, 15 34',
    'M25 6 C 30 6, 28 14, 30 18 C 31 19, 33 20, 34 20 C 33 20, 31 21, 30 22 C 28 26, 30 34, 25 34',
  ],
  laptop: ['M8 9 L32 9 L32 26 L8 26 Z', 'M4 30 L36 30 L34 33 L6 33 Z', 'M15 14 L12 17.5 L15 21', 'M25 14 L28 17.5 L25 21'],
  ifelse: ['M20 4 L32 16 L20 28 L8 16 Z', 'M20 28 L20 37', 'M32 16 L38 16', 'M16 14 L16 18.5', 'M16 12 L16 12.3'],
  binary: ['M8 11 L12 8 L12 31', 'M8 31 L16 31', 'M27 8 C 33 8, 34 31, 27 31 C 20 31, 21 8, 27 8 Z'],
  loop: [
    'M31 15 C 28 8, 20 5, 13 8 C 8 11, 6 16, 7 21',
    'M31 15 L32 8',
    'M31 15 L24 14',
    'M9 26 C 12 32, 20 35, 27 32 C 32 29, 34 24, 33 19',
    'M9 26 L8 33',
    'M9 26 L16 27',
  ],
  bulb: [
    'M20 5 C 12 5, 9 12, 11 18 C 12 22, 15 24, 15 28 L 25 28 C 25 24, 28 22, 29 18 C 31 12, 28 5, 20 5 Z',
    'M16 32 L24 32',
    'M17.5 35.5 L22.5 35.5',
  ],
  cursor: ['M11 5 L11 30 L17 24 L22 34 L26 32 L21 22 L29 22 Z'],
}

export type Idea = keyof typeof ideaPaths

export function IdeaIcon({ name, className }: { name: Idea; className: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={`pointer-events-none ${className}`}>
      {ideaPaths[name].map((d) => (
        <path key={d} {...stroke} strokeWidth={3} vectorEffect="non-scaling-stroke" d={d} />
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
