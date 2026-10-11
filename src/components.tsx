import type { ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from './assets/Codetopia Academy - Logo Black.png'
import { email, registerLabel, registerUrl, whatsapp, type Meaning, type Shape } from './content'
import { IdeaIcon } from './doodles'
import { button, type Look } from './styles'

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
        className="font-inter pointer-events-none absolute top-full left-0 z-10 mt-2 w-72 rounded-xl bg-black p-4 text-left text-sm font-normal tracking-normal normal-case text-white opacity-0 shadow-lg transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <span className="block font-mono text-xs text-zinc-400">
          {meaning.origin} · say it “{meaning.say}”
        </span>
        <span className="mt-1 block font-bold">{meaning.means}</span>
        <span className="mt-3 block border-t border-white/15 pt-3 text-zinc-300">
          <span className="mb-1 block font-mono text-xs text-zinc-400">Why this name</span>
          {meaning.why}
        </span>
      </span>
    </span>
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

export function Ending({ look, title, shapes = false, band = '' }: { look: Look; title: ReactNode; shapes?: boolean; band?: string }) {
  return (
    <section
      id="register"
      className={`relative scroll-mt-20 overflow-hidden px-4 py-24 text-center sm:px-6 ${band}`}
    >
      {shapes && (
        <>
          <IdeaIcon name="controller" className={`absolute top-6 left-[6%] h-12 w-12 -rotate-12 ${band ? 'text-black/70' : 'text-sky-400'} md:h-16 md:w-16`} />
          <IdeaIcon name="braces" className={`absolute top-6 right-[6%] h-12 w-12 rotate-6 ${band ? 'text-black/70' : 'text-orange-400'} md:h-16 md:w-16`} />
          <IdeaIcon name="trophy" className={`absolute bottom-6 left-[10%] h-12 w-12 rotate-6 ${band ? 'text-black/70' : 'text-orange-400'} md:h-16 md:w-16`} />
          <IdeaIcon name="star" className={`absolute right-[10%] bottom-6 h-12 w-12 -rotate-12 ${band ? 'text-black/70' : 'text-yellow-400'} md:h-16 md:w-16`} />
        </>
      )}
      <h2 className="font-display relative text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
      <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={registerUrl} className={button(look)}>
          {registerLabel}
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
      <p className="font-inter relative mt-6 text-sm text-zinc-600">
        Or email{' '}
        <a href={`mailto:${email}`} className="text-black underline">
          {email}
        </a>
      </p>
    </section>
  )
}
