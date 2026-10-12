import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { categories, tutors, type Tutor } from './content'
import { CategoryIcon, IdeaIcon, type Idea } from './doodles'
import { TutorModal } from './TutorModal'
import { endIntro, useReveal } from './motion'

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
    <p
      onAnimationEnd={endIntro}
      className={`sticker -rotate-2 rounded-lg bg-sun px-4 py-2 whitespace-nowrap shadow-[3px_3px_0_0_#000] ${intro ? 'intro-wiggle intro-wiggle-2' : ''}`}
    >
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
function TutorCard({ tutor, copy = false, className = '', onOpen }: { tutor: Tutor; copy?: boolean; className?: string; onOpen: (tutor: Tutor) => void }) {
  return (
    <li className={className} aria-hidden={copy || undefined}>
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

// Big 'Who teaches' heading that sits right above the tutor carousel
export function TutorsHeading({ icon }: { icon?: Icon }) {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="reveal mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24">
      <div className="flex items-center gap-4 border-t border-zinc-200 pt-10">
        <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">Who teaches</h2>
        {icon && <IdeaIcon name={icon.name} className={`h-12 w-12 -rotate-6 sm:h-16 sm:w-16 ${icon.color}`} />}
      </div>
    </section>
  )
}

// Small screens: a row that slides right to left on its own. People can swipe, scroll or
// drag it either way; when left alone for 2 seconds it carries on. It stops while a profile is open.
// The cards are shown twice so the loop is seamless: past either end it jumps by one set.
// Wide screens: all cards sit still in a grid
function useAutoScroll(paused: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(paused)
  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const row = ref.current
    if (!row) return
    const autoScroll = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pos = row.scrollLeft
    let last = performance.now()
    let waitUntil = 0
    let drag: { x: number; start: number; moved: boolean } | null = null
    let frame = 0

    const step = (now: number) => {
      const half = row.scrollWidth / 2
      if (!autoScroll || pausedRef.current || drag || now < waitUntil) {
        pos = row.scrollLeft
      } else {
        // about 6 seconds per tutor keeps the speed the same however many there are
        pos += (half / (tutors.length * 6000)) * (now - last)
        if (pos >= half) pos -= half
        row.scrollLeft = pos
      }
      last = now
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)

    // after someone scrolls or drags, wait 2 seconds before sliding again
    const wait = () => (waitUntil = performance.now() + 2000)

    // a scroll this code didn't make is the person scrolling, or still gliding after a swipe.
    // Going past either end wraps round to the other copy, so it can go either way forever
    const onScroll = () => {
      if (Math.abs(row.scrollLeft - pos) > 2) wait()
      const half = row.scrollWidth / 2
      const shift = row.scrollLeft <= 0 ? half : row.scrollLeft >= half * 2 - row.clientWidth ? -half : 0
      if (shift) {
        row.scrollLeft += shift
        pos = row.scrollLeft
        if (drag) drag.start += shift
      }
    }

    // mouse drag (touch screens already swipe natively)
    const down = (e: PointerEvent) => {
      wait()
      if (e.pointerType === 'mouse') drag = { x: e.clientX, start: row.scrollLeft, moved: false }
    }
    const move = (e: PointerEvent) => {
      if (!drag) return
      const dx = e.clientX - drag.x
      if (Math.abs(dx) > 5) drag.moved = true
      row.scrollLeft = drag.start - dx
    }
    const up = () => {
      if (!drag) return
      const moved = drag.moved
      drag = null
      wait()
      // a drag shouldn't also count as a click that opens a profile
      if (moved) row.addEventListener('click', (e) => e.stopPropagation(), { capture: true, once: true })
    }
    const noImageDrag = (e: DragEvent) => e.preventDefault()

    row.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    row.addEventListener('touchstart', wait, { passive: true })
    row.addEventListener('wheel', wait, { passive: true })
    row.addEventListener('scroll', onScroll, { passive: true })
    row.addEventListener('dragstart', noImageDrag)
    return () => {
      cancelAnimationFrame(frame)
      row.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      row.removeEventListener('touchstart', wait)
      row.removeEventListener('wheel', wait)
      row.removeEventListener('scroll', onScroll)
      row.removeEventListener('dragstart', noImageDrag)
    }
  }, [])

  return ref
}

export function TutorCarousel() {
  const [openTutor, setOpenTutor] = useState<Tutor | null>(null)
  const closeTutor = useCallback(() => setOpenTutor(null), [])
  const rowRef = useAutoScroll(openTutor !== null)
  return (
    <>
      <div ref={rowRef} className="no-scrollbar mt-10 cursor-grab overflow-x-auto pb-16 select-none active:cursor-grabbing md:mt-12 md:pb-24 lg:hidden">
        <ul className="flex w-max">
          {[...tutors, ...tutors].map((tutor, i) => (
            <TutorCard
              key={i}
              tutor={tutor}
              copy={i >= tutors.length}
              className="w-72 shrink-0 pl-4 sm:w-80 md:pl-6"
              onOpen={setOpenTutor}
            />
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-12 hidden max-w-7xl px-6 pb-24 lg:block">
        <ul className="grid grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.name} tutor={tutor} onOpen={setOpenTutor} />
          ))}
        </ul>
      </div>
      {openTutor && <TutorModal tutor={openTutor} onClose={closeTutor} />}
    </>
  )
}
