import type { ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from './assets/Codetopia Academy - Logo Black.png'
import { categories, email, registerLabel, registerUrl, whatsapp, type Meaning, type Shape } from './content'
import { IdeaIcon } from './doodles'
import { button, dots, type Look } from './styles'

export function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.42em] bg-sky-300"
      />
      <span className="relative">{children}</span>
    </span>
  )
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">{children}</p>
}

export function ShapeMark({ shape, color, className = 'h-8 w-8' }: { shape: Shape; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`${className} ${color}`}>
      {shape === 'circle' && <circle cx="16" cy="16" r="15" />}
      {shape === 'square' && <rect x="2" y="2" width="28" height="28" rx="5" />}
      {shape === 'triangle' && <path d="M16 2.5 30 29H2z" strokeLinejoin="round" />}
      {shape === 'diamond' && <path d="M16 1 31 16 16 31 1 16z" />}
    </svg>
  )
}

// Name with its meaning: shows on hover, keyboard focus, or tap on phones
export function NameWithMeaning({ name, meaning, className = '' }: { name: string; meaning: Meaning; className?: string }) {
  const id = `meaning-${name.toLowerCase()}`
  return (
    <span className="group relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        className={`cursor-help underline decoration-zinc-300 decoration-dotted underline-offset-[0.2em] ${className}`}
      >
        {name}
      </button>
      <span
        id={id}
        role="tooltip"
        className="font-inter pointer-events-none absolute top-full left-0 z-10 mt-2 w-64 rounded-xl bg-black p-4 text-left text-sm font-normal tracking-normal normal-case text-white opacity-0 shadow-lg transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <span className="block font-mono text-xs text-zinc-400">{meaning.origin}</span>
        <span className="mt-1 block font-bold">{meaning.means}</span>
        <span className="mt-2 block text-zinc-300">{meaning.why}</span>
      </span>
    </span>
  )
}

// Adults page list of the six categories
export function Categories() {
  return (
    <ol className="divide-y divide-zinc-200 border-y border-zinc-200">
      {categories.map((category) => (
        <li key={category.name} className="grid gap-2 py-6 md:grid-cols-[1fr_1.5fr] md:gap-6">
          <div>
            <p className="text-lg font-bold">{category.name}</p>
            <p className="font-inter mt-1 text-zinc-600">{category.about}</p>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {category.adults.map((course) => (
              <li key={course} className="font-inter border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
                {course}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

export function Header({ look }: { look: Look }) {
  const other = look === 'kids' ? { href: '/adults/', short: 'Adults', text: 'Classes for adults' } : { href: '/', short: 'Children', text: 'Classes for children' }
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/">
          <img src={logo} alt="Codetopia Academy" className="h-auto w-32 sm:w-44" />
        </a>
        <nav className="flex items-center gap-4 sm:gap-6">
          <a href={other.href} className="font-inter text-sm text-zinc-600 hover:text-black">
            <span className="sm:hidden">{other.short}</span>
            <span className="hidden sm:inline">{other.text}</span>
          </a>
          <a href={registerUrl} className={`${button(look)} !py-2`}>
            {registerLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Ending({ look, title, shapes = false }: { look: Look; title: ReactNode; shapes?: boolean }) {
  return (
    <section
      id="register"
      style={shapes ? undefined : dots}
      className="relative scroll-mt-20 overflow-hidden px-4 py-24 text-center sm:px-6"
    >
      {shapes && (
        <>
          <IdeaIcon name="pencil" className="-bottom-10 -left-6 h-36 w-36 -rotate-6 sm:left-[4%] sm:h-48 sm:w-48" />
          <IdeaIcon name="code" className="-top-6 -right-6 h-36 w-36 sm:right-[5%] sm:h-48 sm:w-48" />
          <IdeaIcon name="bulb" className="top-4 left-[18%] hidden h-32 w-32 -rotate-12 md:block" />
          <IdeaIcon name="think" className="right-[20%] -bottom-6 hidden h-36 w-36 md:block" />
        </>
      )}
      <h2 className="font-display relative text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
      <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={registerUrl} className={button(look)}>
          {registerLabel} ›
        </a>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className={button(look, 'secondary')}
        >
          <FaWhatsapp className="h-4 w-4" /> Ask on WhatsApp
        </a>
      </div>
      <p className="font-inter relative mt-6 text-sm text-zinc-500">
        Or email{' '}
        <a href={`mailto:${email}`} className="text-black underline">
          {email}
        </a>
      </p>
    </section>
  )
}
