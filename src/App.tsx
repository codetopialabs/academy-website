import type { ReactNode } from 'react'
import { Ending, Header, Label, Marker } from './components'
import {
  faq,
  forParents,
  registerLabel,
  registerUrl,
  startDate,
  stats,
  tutors,
} from './content'
import { Explorer } from './Explorer'
import {
  Arrow,
  Check,
  Loop,
  Note,
  Scribbled,
  Sparkle,
  Squiggle,
  Star,
} from './doodles'
import { Footer } from './Footer'
import { button, dots } from './styles'

function Section({
  label,
  title,
  note,
  children,
}: {
  label: string
  title: ReactNode
  note?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Label>{label}</Label>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {note}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  )
}

const stickerTilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
const stickerColors = ['text-yellow-400', 'text-sky-400', 'text-emerald-400', 'text-orange-400']

function CheckList({ lines }: { lines: string[] }) {
  return (
    <ul className="font-inter mt-5 space-y-4 text-zinc-700">
      {lines.map((line) => (
        <li key={line} className="flex gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
          {line}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div className="overflow-x-clip bg-white text-black">
      <a
        href={registerUrl}
        className="font-inter block bg-yellow-300 px-4 py-2.5 text-center text-sm hover:bg-yellow-200"
      >
        <span className="font-bold">First classes start {startDate}.</span>{' '}
        <span className="underline underline-offset-2">Register ›</span>
      </a>
      <Header look="kids" />

      <main>
        <section style={dots} className="relative px-4 pt-24 pb-28 text-center sm:px-6 sm:pt-32 sm:pb-36">
          <Star className="absolute top-14 left-[8%] h-10 w-10 -rotate-12 text-yellow-400 sm:h-14 sm:w-14" />
          <Squiggle className="absolute top-24 right-[7%] hidden h-6 w-28 text-emerald-400 sm:block" />
          <Sparkle className="absolute bottom-20 left-[14%] hidden h-8 w-8 text-sky-400 sm:block" />
          <Loop className="absolute right-[10%] bottom-16 hidden h-10 w-32 text-orange-300 md:block" />

          <p className="font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
            Think. Build. <span className="font-bold text-black">Solve.</span>
          </p>
          <h1 className="font-display relative mx-auto mt-6 max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl md:text-7xl">
            Kids already use technology every day. We teach them to <Marker>build with it.</Marker>
          </h1>
          <p className="font-inter mx-auto mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl">
            Live, project-based weekend classes for children and teens aged 6 to 20. Small groups,
            real tutors, and something new built every month.
          </p>

          <div className="relative mx-auto mt-12 inline-block">
            <a href={registerUrl} className={button('kids')}>
              {registerLabel} ›
            </a>
            <div className="absolute top-1/2 left-full ml-3 hidden -translate-y-1/2 items-center sm:flex">
              <Arrow className="h-12 w-16 -scale-x-100 rotate-[100deg] text-zinc-500" />
              <Note className="-rotate-3 whitespace-nowrap">first class: {startDate}</Note>
            </div>
            <Note className="mt-4 block -rotate-2 sm:hidden">first class: {startDate}</Note>
          </div>
        </section>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 pt-4 sm:px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.small}
              className={`rounded-2xl border-2 border-black bg-white p-5 text-center ${stickerTilts[i]}`}
            >
              <p className={`font-hand text-6xl leading-none font-bold ${stickerColors[i]}`}>{stat.big}</p>
              <p className="font-inter mt-2 text-sm text-zinc-700">{stat.small}</p>
            </div>
          ))}
        </div>

        <Section
          label="Find your child's group"
          title={
            <>
              What will your child <Scribbled color="text-yellow-300">learn?</Scribbled>
            </>
          }
          note={<Note className="-rotate-2">pick your child's age ✦</Note>}
        >
          <Explorer />
        </Section>

        <section className="relative bg-black px-4 py-24 text-white sm:px-6 sm:py-32">
          <Sparkle className="absolute top-12 right-[10%] h-10 w-10 text-yellow-300" />
          <Squiggle className="absolute bottom-14 left-[8%] h-6 w-28 text-sky-300" />
          <figure className="mx-auto max-w-4xl">
            <blockquote className="font-display text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
              “We don't train people to use one tool or one language. We raise{' '}
              <span className="whitespace-nowrap text-sky-300">problem-solvers.</span>”
            </blockquote>
            <figcaption className="mt-8 font-mono text-sm tracking-[0.2em] text-zinc-400 uppercase">
              Codetopia Academy
            </figcaption>
          </figure>
        </section>

        <Section
          label="Who teaches"
          title={
            <>
              Tutors who know your <Scribbled color="text-orange-300">child's name</Scribbled>
            </>
          }
        >
          <ul className="grid gap-10 sm:grid-cols-3">
            {tutors.map((tutor, i) => (
              <li key={i} className="flex items-center gap-4">
                <div
                  className={`h-20 w-20 shrink-0 rounded-full border-2 border-black bg-zinc-100 ${i % 2 ? 'rotate-3' : '-rotate-3'}`}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold">{tutor.name}</p>
                  <p className="font-hand text-xl text-zinc-500">{tutor.role}</p>
                  <p className="font-inter mt-1 text-sm text-zinc-600">{tutor.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="For parents" title="Questions parents ask">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div className="h-fit rounded-3xl border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl font-bold">Your child is safe with us</h3>
              <CheckList lines={forParents} />
            </div>
            <div className="divide-y-2 divide-dashed divide-zinc-200">
              {faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    {item.q}
                    <span className="font-hand text-3xl leading-none transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="font-inter mt-3 text-zinc-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <div className="relative">
          <Star className="absolute top-12 right-[12%] h-12 w-12 rotate-12 text-yellow-400" />
          <Sparkle className="absolute bottom-16 left-[10%] h-9 w-9 text-sky-400" />
          <Ending
            look="kids"
            title={
              <>
                Classes start <Marker>{startDate}.</Marker>
              </>
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
