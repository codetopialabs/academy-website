import type { ReactNode } from 'react'
import { Ending, Header, Marker } from './components'
import { categories, email, faq, forParents, priceAmount, pricePer, registerLabel, registerUrl, startDate, startLine, classStarted, tutors, whatsapp } from './content'
import { CategoryIcon, IdeaIcon, type Idea } from './doodles'
import { AgePicker } from './Explorer'
import { Footer } from './Footer'
import { button } from './styles'

type Icon = { name: Idea; color: string }

// icons in the empty page margins, wide screens only
const edgeIcons: { name: Idea; top: string; side: string; color: string }[] = [
  { name: 'gear', top: 'top-[16%]', side: 'left-3 -rotate-12', color: 'text-sky-400' },
  { name: 'camera', top: 'top-[27%]', side: 'right-3 rotate-6', color: 'text-orange-400' },
  { name: 'bug', top: 'top-[39%]', side: 'left-3 rotate-12', color: 'text-emerald-400' },
  { name: 'blocks', top: 'top-[50%]', side: 'right-3 -rotate-6', color: 'text-yellow-400' },
  { name: 'cursor', top: 'top-[62%]', side: 'left-3 -rotate-6', color: 'text-orange-400' },
  { name: 'ifelse', top: 'top-[73%]', side: 'right-3 rotate-12', color: 'text-sky-400' },
  { name: 'loop', top: 'top-[85%]', side: 'left-3 rotate-6', color: 'text-emerald-400' },
]

// One icon sits under the title, never over content
function SectionTitle({ title, icon }: { title: string; icon?: Icon }) {
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
function Section({ title, icons = [], children }: { title: string; icons?: Icon[]; children: ReactNode }) {
  const [first, top, bottom] = icons
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
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

function Question({ q, children }: { q: string; children: ReactNode }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-bold [&::-webkit-details-marker]:hidden">
        {q}
        <span aria-hidden="true" className="text-2xl leading-none font-normal text-zinc-400 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="font-inter max-w-2xl pb-6 text-zinc-700">{children}</div>
    </details>
  )
}

// DUMMY: swap for a real photo
function PhotoSpace({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`font-inter flex items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50/90 p-6 text-center text-sm text-zinc-400 ${className}`}
    >
      {label}
    </div>
  )
}

function App() {
  return (
    <div className="overflow-x-clip bg-white text-black">
      <Header look="kids" />

      <main className="relative">
        {edgeIcons.map((icon) => (
          <IdeaIcon key={icon.top + icon.name} name={icon.name} className={`absolute hidden h-14 w-14 xl:block ${icon.top} ${icon.side} ${icon.color}`} />
        ))}
        <div className="relative overflow-hidden">
        <section className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-end md:pt-28">
          <div>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              Your child already uses technology. Here, they learn to <Marker>build with it.</Marker>
            </h1>
            <p className="font-inter mt-8 max-w-xl text-lg text-zinc-700">
              Small live classes online for ages 6 to 20, every Saturday and Sunday. Taught by real
              tutors, in groups of about five.
            </p>
            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <a href={registerUrl} className={`${button('kids')} shrink-0 whitespace-nowrap`}>
                {registerLabel} ›
              </a>
              <p className="-rotate-2 rounded-lg bg-yellow-300 px-4 py-2 whitespace-nowrap shadow-[3px_3px_0_0_#000]">
                {/* both parts big so the whole price reads at a glance */}
                <span className="font-display text-2xl font-bold tracking-tight sm:text-4xl">{priceAmount}</span>
                <span className="font-display ml-1.5 text-lg font-bold tracking-tight sm:ml-2 sm:text-2xl">{pricePer}</span>
              </p>
            </div>
            <p className="font-inter mt-6 text-zinc-700">{startLine}</p>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter mt-3 inline-block text-sm underline underline-offset-4"
            >
              Questions? Message us on WhatsApp ›
            </a>
          </div>
          <div className="relative mx-4 md:mx-0">
            <PhotoSpace label="Photo: a learner showing their project" className="aspect-[4/5]" />
            <IdeaIcon name="controller" className="absolute -top-8 -left-8 h-20 w-20 -rotate-12 text-sky-400" />
            <IdeaIcon name="bulb" className="absolute -top-10 right-4 h-16 w-16 rotate-12 text-yellow-400" />
            <IdeaIcon name="robot" className="absolute -right-8 -bottom-8 h-24 w-24 rotate-6 text-orange-400" />
            <IdeaIcon name="flag" className="absolute -bottom-6 -left-6 h-16 w-16 -rotate-12 text-emerald-400" />
            <IdeaIcon name="keyboard" className="absolute top-1/3 -right-7 h-14 w-14 rotate-12 text-emerald-400" />
            <IdeaIcon name="mouse" className="absolute top-1/2 -left-7 h-14 w-14 -rotate-12 text-orange-400" />
          </div>
        </section>
        </div>

        <Section title="How it works" icons={[{ name: 'chat', color: 'text-sky-400' }, { name: 'globe', color: 'text-emerald-400' }, { name: 'laptop', color: 'text-orange-400' }]}>
          <div className="font-inter max-w-2xl space-y-5 text-lg text-zinc-700">
            <p>
              Every class is live on video, cameras on, with a tutor who knows each child by name.
              Groups are small, about five children, and they meet twice every weekend.
            </p>
            <p>
              Each month, your child finishes a small project. Every four months they finish a bigger
              one and present it at our showcase. Family and friends are welcome.
            </p>
          </div>
        </Section>

        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <div className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <SectionTitle title="Find your child's group" icon={{ name: 'puzzle', color: 'text-emerald-400' }} />
            <p className="font-inter max-w-2xl text-lg text-zinc-700">
              Children are grouped by age, so everyone learns with others at their level. Tap a group
              name to see what it means.
            </p>
          </div>
        </section>
        <div className="mt-10">
          <AgePicker />
        </div>

        <Section title="What they learn" icons={[{ name: 'brush', color: 'text-orange-400' }, { name: 'chip', color: 'text-sky-400' }, { name: 'music', color: 'text-emerald-400' }]}>
          <p className="font-inter text-lg text-zinc-700">
            Six areas. Every learner gets to try them all.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.id} className={`rounded-2xl p-6 ${category.tint}`}>
                <CategoryIcon id={category.id} className="h-9 w-9" />
                <p className="font-display mt-8 text-xl leading-tight font-bold">{category.name}</p>
                <p className="font-inter mt-2 text-zinc-700">{category.feel}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Who teaches" icons={[{ name: 'star', color: 'text-yellow-400' }, { name: 'search', color: 'text-sky-400' }, { name: 'chat', color: 'text-orange-400' }]}>
          <p className="font-inter max-w-2xl text-lg text-zinc-700">
            We choose and train our own tutors, and check every one before they teach.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {tutors.map((tutor, i) => (
              <li key={i}>
                <PhotoSpace label="Tutor photo" className="aspect-square" />
                <p className="mt-3 font-bold">{tutor.name}</p>
                <p className="font-inter text-sm text-zinc-600">{tutor.line}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="For parents" icons={[{ name: 'shield', color: 'text-emerald-400' }, { name: 'lock', color: 'text-sky-400' }, { name: 'heart', color: 'text-orange-400' }]}>
          <h3 className="font-bold">Keeping your child safe</h3>
          <ul className="font-inter mt-4 list-disc space-y-2 pl-5 text-zinc-700 marker:text-zinc-400">
            {forParents.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h3 className="mt-12 font-bold">Common questions</h3>
          <div className="mt-2 divide-y divide-zinc-200 border-y border-zinc-200">
            {faq.map((item) => (
              <Question key={item.q} q={item.q}>
                {item.a}
              </Question>
            ))}
          </div>
          <p className="font-inter mt-6 text-sm text-zinc-600">
            Anything else? Email{' '}
            <a href={`mailto:${email}`} className="underline underline-offset-2">
              {email}
            </a>
            .
          </p>
        </Section>

        <Ending
          look="kids"
          shapes
          title={
            <>
              {classStarted ? (
                <>
                  You can still join <Marker>this week.</Marker>
                </>
              ) : (
                <>
                  Next class starts on <Marker>{startDate}.</Marker>
                </>
              )}
            </>
          }
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
