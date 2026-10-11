import type { ReactNode } from 'react'
import { Ending, Header, Label, NameWithMeaning } from './components'
import { button } from './styles'
import { adultAges, adultCourses, adultMeaning, adultName, adultHow, adultNeed, adultStart, adultWho, registerLabel, registerUrl } from './content'
import { Footer } from './Footer'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 border-t border-zinc-200 px-4 py-14 sm:px-6 md:grid-cols-[1fr_2fr] md:gap-12">
      <Label>{label}</Label>
      <div>{children}</div>
    </section>
  )
}

export function Adults() {
  return (
    <div className="bg-white text-black">
      <Header look="adults" />

      <main>
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
            <NameWithMeaning name={adultName} meaning={adultMeaning} className="uppercase" /> · Ages {adultAges} · {adultStart ? `Starts ${adultStart}` : 'Opening soon'}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Tech skills you can use at work.
          </h1>
          <p className="font-inter mt-6 max-w-xl text-lg text-zinc-600">
            Small live evening classes for adults. Beginners welcome.
          </p>
          <a href={registerUrl} className={`${button('adults')} mt-10`}>
            {registerLabel}
          </a>
        </section>

        <Row label="Courses">
          <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
            {adultCourses.map((course) => (
              <li key={course.name} className="py-6">
                <p className="text-xl font-bold">{course.name}</p>
                <p className="font-inter mt-1 text-zinc-600">{course.about}</p>
                <p className="font-inter mt-3 text-sm">
                  <span className="text-zinc-500">You'll leave with: </span>
                  {course.make}
                </p>
              </li>
            ))}
          </ul>
        </Row>

        <Row label="How it works">
          <ul className="font-inter space-y-2 text-lg text-zinc-700">
            {adultHow.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Row>

        <Row label="Who it's for">
          <dl className="grid gap-6 sm:grid-cols-2">
            {adultWho.map((item) => (
              <div key={item.who}>
                <dt className="font-bold">{item.who}</dt>
                <dd className="font-inter mt-1 text-zinc-600">{item.why}</dd>
              </div>
            ))}
          </dl>
        </Row>

        <Row label="What you need">
          <ul className="font-inter space-y-2 text-lg text-zinc-700">
            {adultNeed.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Row>

        <Ending look="adults" title="Start learning this term." />
      </main>

      <Footer />
    </div>
  )
}
