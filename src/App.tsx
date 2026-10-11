import type { ReactNode } from 'react'
import { Categories, Ending, Header, Label, Marker, NameWithMeaning } from './components'
import {
  beforeYouStart,
  forParents,
  groups,
  moduleSteps,
  registerLabel,
  registerUrl,
  startDate,
  tutors,
  type Group,
} from './content'
import {
  Arrow,
  Check,
  Loop,
  Note,
  Path,
  Scribbled,
  SketchShape,
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

// slight tilts so the panels look placed by hand
const tilts = ['-rotate-1', 'rotate-[0.6deg]', 'rotate-[0.8deg]', '-rotate-[0.5deg]']

function GroupBlock({ group, tilt }: { group: Group; tilt: string }) {
  return (
    <div id={group.id} className={`relative scroll-mt-20 rounded-3xl p-6 sm:p-8 ${group.tint} ${tilt}`}>
      {group.open && (
        <Note className="absolute -top-7 right-6 rotate-3 text-xl text-black">first classes here!</Note>
      )}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <SketchShape shape={group.shape} color={group.color} className="h-10 w-10" />
        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          <NameWithMeaning name={group.name} meaning={group.meaning} />
        </h3>
        <span className="font-hand text-2xl text-zinc-600">ages {group.ages}</span>
      </div>
      <p className="font-inter mt-4 text-lg text-zinc-700">{group.about}</p>
      <p className="mt-5">
        <span
          className={`rounded-full px-3 py-1 font-mono text-xs ${
            group.open ? 'bg-black text-white' : 'border border-black/15 bg-white/70 text-zinc-500'
          }`}
        >
          {group.open ? `Starts ${startDate}` : 'Opening soon'}
        </span>
      </p>
    </div>
  )
}

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
      <Header look="kids" />

      <main>
        <section style={dots} className="relative px-4 pt-24 pb-28 text-center sm:px-6 sm:pt-32 sm:pb-36">
          <Star className="absolute top-14 left-[8%] h-10 w-10 -rotate-12 text-yellow-400 sm:h-14 sm:w-14" />
          <Squiggle className="absolute top-24 right-[7%] hidden h-6 w-28 text-emerald-400 sm:block" />
          <Sparkle className="absolute bottom-20 left-[14%] hidden h-8 w-8 text-sky-400 sm:block" />
          <Loop className="absolute right-[10%] bottom-16 hidden h-10 w-32 text-orange-300 md:block" />

          <h1 className="font-display relative text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Think. Build. <Marker>Solve.</Marker>
          </h1>
          <p className="font-inter mx-auto mt-6 max-w-xl text-lg text-zinc-600 sm:text-xl">
            Live, project-based classes for children and teens aged 6 to 20. Small groups, real
            tutors, and something new built every month.
          </p>

          <div className="relative mx-auto mt-12 inline-block">
            <a href={registerUrl} className={button('kids')}>
              {registerLabel}
            </a>
            <div className="absolute top-1/2 left-full ml-3 hidden -translate-y-1/2 items-center sm:flex">
              <Arrow className="h-12 w-16 -scale-x-100 rotate-[100deg] text-zinc-500" />
              <Note className="-rotate-3 whitespace-nowrap">first class: {startDate}</Note>
            </div>
            <Note className="mt-4 block -rotate-2 sm:hidden">first class: {startDate}</Note>
          </div>
        </section>

        <Section
          label="Classes by age"
          title={
            <>
              Pick your child's <Scribbled color="text-yellow-300">group</Scribbled>
            </>
          }
          note={<Note className="-rotate-2">psst… tap a name. they all mean something ✦</Note>}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {groups.map((group, i) => (
              <GroupBlock key={group.id} group={group} tilt={tilts[i % tilts.length]} />
            ))}
          </div>
        </Section>

        <Section
          label="What we teach"
          title={
            <>
              Six areas, <Scribbled color="text-emerald-300">one after another</Scribbled>
            </>
          }
          note={<Note className="rotate-2">everyone does all six!</Note>}
        >
          <p className="font-inter -mt-4 mb-10 max-w-2xl text-lg text-zinc-600">
            Every learner works through all six, at a level that fits their age. Each area has many
            courses. Here are a few.
          </p>
          <Categories look="kids" />
        </Section>

        <div style={dots} className="relative">
          <Section
            label="How learning works"
            title={
              <>
                Four months, <Scribbled>one module</Scribbled>
              </>
            }
          >
            <div className="relative">
              <Path className="absolute top-5 left-0 hidden h-6 w-full text-zinc-400 sm:block" />
              <ol className="relative grid gap-8 sm:grid-cols-5 sm:gap-4">
                {moduleSteps.map((step, i) => {
                  const last = i === moduleSteps.length - 1
                  return (
                    <li key={step.when} className="flex gap-4 sm:flex-col sm:gap-3">
                      {last ? (
                        <Star className="h-14 w-14 shrink-0 -rotate-6 text-black" fillClass="fill-sky-300" />
                      ) : (
                        <span className="font-hand flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-2xl font-bold">
                          {i + 1}
                        </span>
                      )}
                      <div>
                        <p className="font-bold">{step.when}</p>
                        <p className="font-inter text-zinc-600">{step.what}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="font-inter space-y-2 text-lg text-zinc-700">
                <p>8 live sessions a month, twice a week, cameras on.</p>
                <p>About 5 children per tutor.</p>
              </div>
              <Note className="rotate-2 sm:max-w-xs sm:text-right">
                bring grandma. bring the cousins. everyone's invited to the showcase!
              </Note>
            </div>
          </Section>
        </div>

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

        <Section label="Good to know" title="For parents">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-black p-6 sm:p-8">
              <h3 className="text-xl font-bold">Your child is safe with us</h3>
              <CheckList lines={forParents} />
            </div>
            <div className="rounded-3xl border-2 border-dashed border-zinc-300 p-6 sm:p-8">
              <h3 className="text-xl font-bold">Before you start</h3>
              <CheckList lines={beforeYouStart} />
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
