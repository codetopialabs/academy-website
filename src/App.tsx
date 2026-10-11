import type { ReactNode } from 'react'
import { Ending, Header, Label, Marker, NameWithMeaning, ShapeMark } from './components'
import { button, dots } from './styles'
import {
  beforeYouStart,
  forParents,
  groups,
  month,
  registerLabel,
  registerUrl,
  startDate,
  tutors,
  type Group,
} from './content'
import { Footer } from './Footer'

function Section({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Label>{label}</Label>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div id={group.id} className={`scroll-mt-20 rounded-3xl p-6 sm:p-10 ${group.tint}`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <ShapeMark shape={group.shape} color={group.color} className="h-9 w-9" />
        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <NameWithMeaning name={group.name} meaning={group.meaning} />
        </h3>
        <span className="font-mono text-sm text-zinc-500">Ages {group.ages}</span>
        <span
          className={`rounded-full px-3 py-1 font-mono text-xs ${
            group.open ? 'bg-black text-white' : 'bg-white text-zinc-500'
          }`}
        >
          {group.open ? `Starts ${startDate}` : 'Opening soon'}
        </span>
      </div>
      <p className="font-inter mt-4 text-lg text-zinc-700">{group.about}</p>
      <ul className="mt-8 divide-y divide-black/10">
        {group.courses.map((course) => (
          <li key={course.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_1fr_1fr] sm:gap-6">
            <p className="font-bold">{course.name}</p>
            <p className="font-inter text-zinc-600">{course.about}</p>
            <p className="font-inter">
              <span className="text-zinc-500">They'll make: </span>
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
      <Header look="kids" />

      <main>
        <section style={dots} className="px-4 py-24 text-center sm:px-6 sm:py-32">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Think. Build. <Marker>Solve.</Marker>
          </h1>
          <p className="font-inter mx-auto mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl">
            Live classes where children and teens aged 6 to 20 build games, animations and websites. Small
            groups, real tutors.
          </p>
          <p className="mt-8 font-mono text-sm tracking-[0.2em] text-zinc-500 uppercase">
            Classes start {startDate}
          </p>
          <a href={registerUrl} className={`${button('kids')} mt-8`}>
            {registerLabel}
          </a>
        </section>

        <Section label="Classes by age" title="Pick your child's group">
          <div className="space-y-6">
            {groups.map((group) => (
              <GroupBlock key={group.id} group={group} />
            ))}
          </div>
        </Section>

        <Section label="How a month works" title="Four weeks, one finished project">
          <ol className="grid gap-6 sm:grid-cols-5 sm:gap-4">
            {month.map((step, i) => (
              <li key={step.when} className="flex gap-4 sm:flex-col sm:gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${
                    i === month.length - 1 ? 'bg-sky-300' : 'bg-zinc-100'
                  }`}
                >
                  {i < month.length - 1 ? i + 1 : '★'}
                </span>
                <div>
                  <p className="font-bold">{step.when}</p>
                  <p className="font-inter text-zinc-600">{step.what}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="font-inter mt-12 space-y-2 text-lg text-zinc-700">
            <p>About 5 children per tutor, live with cameras on.</p>
            <p>Every 4-month term ends with a bigger capstone project.</p>
          </div>
        </Section>

        <Section label="Who teaches" title="Tutors who know your child's name">
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

        <Section label="Good to know" title="For parents">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">Your child is safe with us</h3>
              <ul className="font-inter mt-4 space-y-3 text-zinc-600">
                {forParents.map((line) => (
                  <li key={line} className="border-l-2 border-sky-300 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Before you start</h3>
              <ul className="font-inter mt-4 space-y-3 text-zinc-600">
                {beforeYouStart.map((line) => (
                  <li key={line} className="border-l-2 border-sky-300 pl-4">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Ending
          look="kids"
          title={
            <>
              Classes start <Marker>{startDate}.</Marker>
            </>
          }
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
