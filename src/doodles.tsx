import type { CSSProperties } from 'react'
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
  keyboard: [
    'M4 12 L36 12 L36 30 L4 30 Z',
    'M9 17 L9.3 17.3', 'M14 17 L14.3 17.3', 'M19 17 L19.3 17.3', 'M24 17 L24.3 17.3', 'M29 17 L29.3 17.3', 'M9 22 L9.3 22.3', 'M14 22 L14.3 22.3', 'M19 22 L19.3 22.3', 'M24 22 L24.3 22.3', 'M29 22 L29.3 22.3',
    'M13 26 L27 26',
  ],
  mouse: [
    'M20 6 C 28 6, 30 13, 30 20 L30 26 C 30 32, 26 35, 20 35 C 14 35, 10 32, 10 26 L10 20 C 10 13, 12 6, 20 6 Z',
    'M20 6 L20 16',
    'M10 16 L30 16',
  ],
  gear: [
    'M20 14 C 23.5 14, 26 16.5, 26 20 C 26 23.5, 23.5 26, 20 26 C 16.5 26, 14 23.5, 14 20 C 14 16.5, 16.5 14, 20 14 Z',
    'M20 5 L20 10', 'M20 30 L20 35', 'M5 20 L10 20', 'M30 20 L35 20',
    'M9.5 9.5 L13 13', 'M27 27 L30.5 30.5', 'M30.5 9.5 L27 13', 'M13 27 L9.5 30.5',
  ],
  search: ['M17 6 C 23 6, 28 11, 28 17 C 28 23, 23 28, 17 28 C 11 28, 6 23, 6 17 C 6 11, 11 6, 17 6 Z', 'M25 25 L35 35'],
  chat: ['M6 8 L34 8 L34 26 L18 26 L10 33 L11 26 L6 26 Z', 'M12 15 L28 15', 'M12 20 L23 20'],
  brush: ['M30 5 L35 10 L19 26 L14 21 Z', 'M14 21 C 9 21, 7 25, 7 28 C 7 31, 5 33, 4 34 C 10 35, 18 33, 19 26'],
  camera: [
    'M5 13 L13 13 L16 8 L24 8 L27 13 L35 13 L35 32 L5 32 Z',
    'M20 16 C 24 16, 26.5 19, 26.5 22.5 C 26.5 26, 24 29, 20 29 C 16 29, 13.5 26, 13.5 22.5 C 13.5 19, 16 16, 20 16 Z',
  ],
  trophy: [
    'M12 6 L28 6 L28 15 C 28 21, 24 24, 20 24 C 16 24, 12 21, 12 15 Z',
    'M12 9 C 6 9, 6 17, 12 17',
    'M28 9 C 34 9, 34 17, 28 17',
    'M20 24 L20 30',
    'M13 34 L27 34 L25 30 L15 30 Z',
  ],
  flag: ['M9 4 L9 36', 'M9 6 C 15 3, 20 9, 26 6 C 29 5, 31 5, 33 6 L33 20 C 31 19, 29 19, 26 20 C 20 23, 15 17, 9 20'],
  chip: [
    'M11 11 L29 11 L29 29 L11 29 Z',
    'M16 16 L24 16 L24 24 L16 24 Z',
    'M15 11 L15 6', 'M20 11 L20 6', 'M25 11 L25 6', 'M15 29 L15 34', 'M20 29 L20 34', 'M25 29 L25 34',
    'M11 15 L6 15', 'M11 20 L6 20', 'M11 25 L6 25', 'M29 15 L34 15', 'M29 20 L34 20', 'M29 25 L34 25',
  ],
  lock: ['M10 18 L30 18 L30 34 L10 34 Z', 'M14 18 L14 13 C 14 5, 26 5, 26 13 L26 18', 'M20 24 L20 28'],
  shield: ['M20 4 L33 9 L33 19 C 33 27, 27 33, 20 36 C 13 33, 7 27, 7 19 L7 9 Z', 'M14 20 L18.5 24.5 L26 16'],
  globe: [
    'M20 5 C 28.5 5, 35 11.5, 35 20 C 35 28.5, 28.5 35, 20 35 C 11.5 35, 5 28.5, 5 20 C 5 11.5, 11.5 5, 20 5 Z',
    'M5 20 L35 20',
    'M20 5 C 13 12, 13 28, 20 35',
    'M20 5 C 27 12, 27 28, 20 35',
  ],
  dice: ['M7 7 L33 7 L33 33 L7 33 Z', 'M13 13 L13.3 13.3', 'M27 27 L27.3 27.3', 'M20 20 L20.3 20.3', 'M27 13 L27.3 13.3', 'M13 27 L13.3 27.3'],
  star: ['M20 3 L24.5 14.5 L37 15.5 L27 23 L30.5 36 L20 28.5 L9 35.5 L13 23 L3.5 15 L15.5 14 Z'],
  heart: [
    'M20 34 C 12 28, 4 22, 4 14 C 4 8, 9 5, 13 5 C 16.5 5, 19 7.5, 20 10 C 21 7.5, 23.5 5, 27 5 C 31 5, 36 8, 36 14 C 36 22, 28 28, 20 34 Z',
  ],
  music: [
    'M15 29 L15 8 L32 5 L32 26',
    'M15 13 L32 10',
    'M15 29 C 15 32, 9 33, 9 30 C 9 27, 14 26, 15 29 Z',
    'M32 26 C 32 29, 26 30, 26 27 C 26 24, 31 23, 32 26 Z',
  ],
  puzzle: ['M6 12 L15 12 C 13 7, 22 7, 20 12 L29 12 L29 20 C 34 18.5, 34 27, 29 25 L29 33 L6 33 Z'],
  gift: [
    'M7 17 L33 17 L33 35 L7 35 Z',
    'M5 11 L35 11 L35 17 L5 17 Z',
    'M20 11 L20 35',
    'M20 11 C 14 3, 7 8, 13 11',
    'M20 11 C 26 3, 33 8, 27 11',
  ],
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

// The welcome pack gift: every few seconds the lid lifts and a few bits of confetti pop out
const confetti = [
  { d: 'M0 0 L0 0.1', x: -22, y: -22, color: 'text-sky-400' },
  { d: 'M-2.5 0 L2.5 0 M0 -2.5 L0 2.5', x: -7, y: -34, color: 'text-yellow-400' },
  { d: 'M0 0 L0 0.1', x: 10, y: -30, color: 'text-emerald-400' },
  { d: 'M-2.5 0 L2.5 0 M0 -2.5 L0 2.5', x: 24, y: -18, color: 'text-orange-400' },
  { d: 'M0 0 L0 0.1', x: 2, y: -42, color: 'text-sky-400' },
]

export function GiftBox({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" overflow="visible" aria-hidden="true" className={className}>
      <g {...stroke} strokeWidth={3} vectorEffect="non-scaling-stroke">
        {confetti.map((c, i) => (
          <path
            key={i}
            d={c.d}
            strokeWidth={4}
            className={`gift-bit ${c.color}`}
            style={{ '--x': `${c.x}px`, '--y': `${c.y}px`, animationDelay: `${i * 30}ms` } as CSSProperties}
          />
        ))}
        <path d="M7 17 L33 17 L33 35 L7 35 Z" vectorEffect="non-scaling-stroke" />
        <path d="M20 17 L20 35" vectorEffect="non-scaling-stroke" />
        <g className="gift-lid">
          <path d="M5 11 L35 11 L35 17 L5 17 Z" vectorEffect="non-scaling-stroke" />
          <path d="M20 11 L20 17" vectorEffect="non-scaling-stroke" />
          <path d="M20 11 C 14 3, 7 8, 13 11" vectorEffect="non-scaling-stroke" />
          <path d="M20 11 C 26 3, 33 8, 27 11" vectorEffect="non-scaling-stroke" />
        </g>
      </g>
    </svg>
  )
}
