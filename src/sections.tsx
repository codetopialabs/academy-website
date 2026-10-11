import { useCallback, useState, type ReactNode } from 'react'
import { categories, tutors, type Tutor } from './content'
import { CategoryIcon, IdeaIcon, type Idea } from './doodles'
import { TutorModal } from './TutorModal'
import { useReveal } from './useReveal'

// Building blocks shared by the children's and adults' pages

export type Icon = { name: Idea; color: string }

// One icon sits under the title, never over content
export function SectionTitle({ title, icon }: { title: string; icon?: Icon }) {
  return (
    <div className="relative">
      <h2 className="font-display pr-16 text-3xl font-bold tracking-tight md:pr-0">{title}</h2>
      {icon && (
        <IdeaIcon
          name={icon.name}
          className={`absolute top-0 right-0 h-12 w-12 -rotate-6 md:static md:mt-10 md:h-28 md:w-28 ${icon.color}`}
        />
      )}
    </div>
  )
}

// The other icons go in the empty padding: top right above the line, and bottom right below the content
export function Section({ title, icons = [], children }: { title: string; icons?: Icon[]; children: ReactNode }) {
  const [first, top, bottom] = icons
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="reveal relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {top && <IdeaIcon name={top.name} className={`absolute top-4 right-6 hidden h-16 w-16 rotate-12 md:block ${top.color}`} />}
      {bottom && (
        <IdeaIcon name={bottom.name} className={`absolute right-[22%] bottom-2 hidden h-16 w-16 -rotate-12 md:block ${bottom.color}`} />
      )}
      <div className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
        <SectionTitle title={title} icon={first} />
        <div>{children}</div>
      </div>
    </section>
  )
}

export function Question({ q, children }: { q: string; children: ReactNode }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-bold transition-colors hover:text-zinc-700 [&::-webkit-details-marker]:hidden">
        {q}
        <span aria-hidden="true" className="text-2xl leading-none font-normal text-zinc-600 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="answer font-inter max-w-2xl pb-6 text-zinc-700">{children}</div>
    </details>
  )
}

export function Questions({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-2 divide-y divide-zinc-200 border-y border-zinc-200">
      {items.map((item) => (
        <Question key={item.q} q={item.q}>
          {item.a}
        </Question>
      ))}
    </div>
  )
}

// DUMMY: swap for a real photo
export function PhotoSpace({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`font-inter flex items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50/90 p-6 text-center text-sm text-zinc-400 ${className}`}
    >
      {label}
    </div>
  )
}

// Yellow price tag next to the Register button. Both parts big so the price reads at a glance.
// Wiggles on hover like the warning sticker
export function PriceTag({ amount, per, intro = false }: { amount: string; per: string; intro?: boolean }) {
  return (
    <p className={`sticker -rotate-2 rounded-lg bg-sun px-4 py-2 whitespace-nowrap shadow-[3px_3px_0_0_#000] ${intro ? 'intro-wiggle intro-wiggle-2' : ''}`}>
      <span className="font-display text-2xl font-bold tracking-tight sm:text-4xl">{amount}</span>
      <span className="font-display ml-1.5 text-lg font-bold tracking-tight sm:ml-2 sm:text-2xl">{per}</span>
    </p>
  )
}

// The six areas as coloured cards, with wording for children or adults
export function AreaCards({ audience }: { audience: 'kids' | 'adults' }) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`group rounded-2xl p-6 transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] ${category.tint}`}
        >
          <CategoryIcon id={category.id} className="h-9 w-9 transition duration-200 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6" />
          <p className="font-display mt-8 text-xl leading-tight font-bold">{category.name}</p>
          <p className="font-inter mt-2 text-zinc-700">{audience === 'kids' ? category.feel : category.adultFeel}</p>
        </li>
      ))}
    </ul>
  )
}

// Big portrait card like the community site: photo goes from grey to colour on hover,
// and the name slides up on hover, keyboard focus or tap
function TutorCard({ tutor, copy = false, onOpen }: { tutor: Tutor; copy?: boolean; onOpen: (tutor: Tutor) => void }) {
  return (
    <li className="w-72 shrink-0 sm:w-80 lg:w-96" aria-hidden={copy || undefined}>
      <div
        role="button"
        tabIndex={copy ? -1 : 0}
        aria-label={`Open ${tutor.name}'s profile`}
        onClick={() => onOpen(tutor)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(tutor)
          }
        }}
        className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl bg-zinc-100 outline-offset-4"
      >
        {tutor.photo ? (
          <img
            src={tutor.photo}
            alt=""
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-focus:scale-105 group-focus:grayscale-0"
          />
        ) : (
          <div className="font-inter flex h-full w-full items-center justify-center border border-dashed border-zinc-300 text-sm text-zinc-400 transition duration-700 group-hover:scale-105">
            Tutor photo
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 translate-y-full bg-black/85 p-5 text-white transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0"
        >
          <p className="font-display text-2xl leading-tight font-bold tracking-tight">{tutor.name}</p>
        </div>
      </div>
    </li>
  )
}

// enough cards to fill wide screens, then the whole set twice so the loop is seamless
const tutorSet = Array.from({ length: Math.max(1, Math.ceil(8 / tutors.length)) }, () => tutors).flat()
const carousel = [...tutorSet, ...tutorSet]

// Carousel: moves right to left in a loop, stops while hovered, tapped or a profile is open
export function TutorCarousel() {
  const [openTutor, setOpenTutor] = useState<Tutor | null>(null)
  const closeTutor = useCallback(() => setOpenTutor(null), [])
  return (
    <>
      <div className={`marquee-wrap -mt-6 overflow-hidden pb-16 md:-mt-10 md:pb-24 ${openTutor ? 'paused' : ''}`}>
        <ul className="marquee flex gap-4 md:gap-6">
          {carousel.map((tutor, i) => (
            <TutorCard key={i} tutor={tutor} copy={i >= tutors.length} onOpen={setOpenTutor} />
          ))}
        </ul>
      </div>
      {openTutor && <TutorModal tutor={openTutor} onClose={closeTutor} />}
    </>
  )
}
