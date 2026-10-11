import type { ReactNode } from 'react'
import { Ending, Header, Marker } from './components'
import { categories, email, faq, forParents, priceAmount, pricePer, registerLabel, registerUrl, startDate, startLine, classStarted, tutors, whatsapp } from './content'
import { CategoryIcon, IdeaIcon, type Idea } from './doodles'
import { AgePicker } from './Explorer'
import { Footer } from './Footer'
import { button } from './styles'

type Icon = { name: Idea; className: string }

function Section({ title, icons = [], children }: { title: string; icons?: Icon[]; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {icons.map((icon) => (
        <IdeaIcon key={icon.name} name={icon.name} className={icon.className} />
      ))}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="font-display text-3xl font-bold tracking-tight">{title}</h2>
          <div>{children}</div>
        </div>
      </section>
    </div>
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
    <div className="bg-white text-black">
      <Header look="kids" />

      <main>
        <div className="relative overflow-hidden">
          <IdeaIcon name="bulb" className="-top-4 -right-6 h-40 w-40 rotate-12 md:right-[2%] md:h-64 md:w-64" />
          <IdeaIcon name="think" className="top-2 left-[38%] hidden h-40 w-40 md:block" />
          <IdeaIcon name="question" className="right-[40%] -bottom-8 hidden h-44 w-44 -rotate-12 md:block" />
          <IdeaIcon name="puzzle" className="-bottom-10 -left-10 h-32 w-32 rotate-6 md:h-52 md:w-52" />
          <IdeaIcon name="cursor" className="top-[48%] -right-8 hidden h-36 w-36 -rotate-6 lg:block" />
          <IdeaIcon name="spark" className="top-20 -left-8 hidden h-28 w-28 md:block" />
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
          <PhotoSpace label="Photo: a learner showing their project" className="aspect-[4/5]" />
        </section>
        </div>

        <Section
          title="How it works"
          icons={[
            { name: 'think', className: 'bottom-4 -left-10 h-32 w-32 md:left-[4%] md:h-44 md:w-44' },
            { name: 'cursor', className: '-right-8 top-16 hidden h-40 w-40 rotate-12 md:block' },
          ]}
        >
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

        <div className="relative overflow-hidden">
          <IdeaIcon name="puzzle" className="-top-4 -right-10 h-32 w-32 -rotate-12 md:right-[3%] md:h-44 md:w-44" />
        <section className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <div className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <h2 className="font-display text-3xl font-bold tracking-tight">Find your child's group</h2>
            <p className="font-inter max-w-2xl text-lg text-zinc-700">
              Children are grouped by age, so everyone learns with others at their level. Tap a group
              name to see what it means.
            </p>
          </div>
        </section>
        </div>
        <div className="mt-10">
          <AgePicker />
        </div>

        <Section
          title="What they learn"
          icons={[
            { name: 'spark', className: 'bottom-10 -left-8 h-28 w-28 md:left-[6%] md:h-40 md:w-40' },
            { name: 'bulb', className: '-top-6 -right-12 hidden h-48 w-48 -rotate-12 md:block' },
          ]}
        >
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

        <Section
          title="Who teaches"
          icons={[
            { name: 'pencil', className: 'bottom-6 -left-10 hidden h-44 w-44 rotate-6 md:block md:left-[3%]' },
            { name: 'question', className: '-top-2 -right-8 h-32 w-32 rotate-12 md:right-[2%] md:h-44 md:w-44' },
          ]}
        >
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

        <Section
          title="For parents"
          icons={[
            { name: 'code', className: 'bottom-8 -left-10 h-32 w-32 md:left-[4%] md:h-44 md:w-44' },
            { name: 'think', className: 'top-10 -right-10 hidden h-40 w-40 md:block' },
          ]}
        >
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
