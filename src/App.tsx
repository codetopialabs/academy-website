import type { ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from './assets/Codetopia Academy - Logo Black.png'
import { Footer } from './Footer'
import {
  adultGroup,
  childGroups,
  email,
  fees,
  forParents,
  howItWorks,
  registerLabel,
  registerUrl,
  startDate,
  tutors,
  whatYouNeed,
  whatsapp,
  type Group,
} from './content'

const dots = {
  backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const buttonClass =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-colors'
const primary = `${buttonClass} bg-black text-white hover:bg-zinc-800`
const secondary = `${buttonClass} border border-black bg-white text-black hover:bg-zinc-100`

function Marker({ children }: { children: ReactNode }) {
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

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">{children}</p>
}

function Section({ id, label, title, children }: { id?: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <Label>{label}</Label>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div id={group.id} className="scroll-mt-20 border-t border-zinc-200 py-10">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{group.name}</h3>
        <span className="font-mono text-sm text-zinc-500">Ages {group.ages}</span>
        <span
          className={`rounded-full px-3 py-1 font-mono text-xs ${
            group.open ? 'bg-sky-300 text-black' : 'bg-zinc-100 text-zinc-500'
          }`}
        >
          {group.open ? `Starts ${startDate}` : 'Opening soon'}
        </span>
      </div>
      <p className="font-inter mt-3 text-zinc-600">{group.about}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {group.courses.map((course) => (
          <li key={course.name} className="rounded-lg border border-zinc-200 bg-white p-5">
            <p className="font-bold">{course.name}</p>
            <p className="font-inter mt-2 text-sm text-zinc-600">{course.about}</p>
            <p className="font-inter mt-4 text-sm">
              <span className="text-zinc-500">You'll make: </span>
              {course.make}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="bg-white text-black">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <img src={logo} alt="Codetopia Academy" className="h-auto w-36 sm:w-44" />
          <a href={registerUrl} className={`${primary} px-4 py-2`}>
            {registerLabel}
          </a>
        </div>
      </header>

      <main>
        <section style={dots} className="px-4 py-24 text-center sm:px-6 sm:py-32">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Think. Build. <Marker>Solve.</Marker>
          </h1>
          <p className="font-inter mx-auto mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl">
            Small live classes for children and adults. Learn to solve problems with technology,
            and finish every month with something you built.
          </p>
          <p className="mt-8 font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
            Classes start {startDate}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#children" className={primary}>
              For my child
            </a>
            <a href="#adults" className={secondary}>
              For me
            </a>
          </div>
        </section>

        <Section id="children" label="For children" title="Classes by age">
          {childGroups.map((group) => (
            <GroupBlock key={group.id} group={group} />
          ))}
        </Section>

        <Section label="For adults" title="Skills you can use at work">
          <GroupBlock group={adultGroup} />
        </Section>

        <div style={dots}>
          <Section label="How it works" title="Small, live and hands-on">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {howItWorks.map((item) => (
                <li key={item.title} className="rounded-lg border border-zinc-200 bg-white p-5">
                  <p className="font-bold">{item.title}</p>
                  <p className="font-inter mt-2 text-sm text-zinc-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section label="Who teaches" title="Real tutors who know your name">
          <ul className="grid gap-6 sm:grid-cols-3">
            {tutors.map((tutor, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-full bg-zinc-200" aria-hidden="true" />
                <div>
                  <p className="font-bold">{tutor.name}</p>
                  <p className="font-mono text-xs text-zinc-500">{tutor.role}</p>
                  <p className="font-inter mt-1 text-sm text-zinc-600">{tutor.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Good to know" title="Before you register">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">For parents</h3>
              <ul className="font-inter mt-4 space-y-3 text-zinc-600">
                {forParents.map((line) => (
                  <li key={line} className="border-l-2 border-sky-300 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">What you need</h3>
              <ul className="font-inter mt-4 space-y-3 text-zinc-600">
                {whatYouNeed.map((line) => (
                  <li key={line} className="border-l-2 border-sky-300 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-lg font-bold">Fees</h3>
              <p className="font-inter mt-4 border-l-2 border-sky-300 pl-4 text-zinc-600">{fees}</p>
            </div>
          </div>
        </Section>

        <section id="register" style={dots} className="scroll-mt-20 px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Classes start <Marker>{startDate}.</Marker>
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={registerUrl} className={primary}>
              {registerLabel}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={secondary}
            >
              <FaWhatsapp className="h-4 w-4" /> Ask on WhatsApp
            </a>
          </div>
          <p className="font-inter mt-6 text-sm text-zinc-500">
            Or email{' '}
            <a href={`mailto:${email}`} className="text-black underline">
              {email}
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
