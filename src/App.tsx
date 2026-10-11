import type { ReactNode } from 'react'
import { Ending, Header, Marker } from './components'
import { categories, email, faq, forParents, priceAmount, pricePer, registerLabel, registerUrl, startDate, tutors, whatsapp } from './content'
import { AgePicker } from './Explorer'
import { Footer } from './Footer'
import { button } from './styles'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-8 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="font-display text-3xl font-bold tracking-tight">{title}</h2>
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
      className={`font-inter flex items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-400 ${className}`}
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
        <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-end md:pt-28">
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
            <p className="font-inter mt-6 text-zinc-700">First classes {startDate}.</p>
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

        <Section title="How it works">
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Find your child's group</h2>
            <p className="font-inter max-w-2xl text-lg text-zinc-700">
              Children are grouped by age, so everyone learns with others at their level. Tap a group
              name to see what it means.
            </p>
          </div>
        </section>
        <div className="mt-10">
          <AgePicker />
        </div>

        <Section title="What they learn">
          <p className="font-inter max-w-2xl text-lg text-zinc-700">
            Every group works through the same six areas, one after another. What changes with age is
            how deep they go.
          </p>
          <ol className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {categories.map((category, i) => (
              <li key={category.id} className="flex gap-4">
                <span className="font-display text-lg text-zinc-400">{i + 1}</span>
                <div>
                  <p className="font-bold">{category.name}</p>
                  <p className="font-inter mt-1 text-zinc-600">{category.about}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Who teaches">
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

        <Section title="For parents">
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
          title={
            <>
              First classes <Marker>{startDate}.</Marker>
            </>
          }
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
