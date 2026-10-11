import type { ReactNode } from 'react'
import { Ending, Header, Marker } from './components'
import { categories, email, faq, forParents, registerLabel, registerUrl, startDate, tutors, whatsapp } from './content'
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
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={registerUrl} className={button('kids')}>
                {registerLabel} ›
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm underline underline-offset-4"
              >
                Questions? Message us on WhatsApp ›
              </a>
            </div>
            <p className="font-inter mt-8 text-sm text-zinc-500">First classes: {startDate}.</p>
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-bold">Keeping your child safe</h3>
              <ul className="font-inter mt-4 list-disc space-y-2 pl-5 text-zinc-700 marker:text-zinc-400">
                {forParents.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Common questions</h3>
              <dl className="font-inter mt-4 space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium">{item.q}</dt>
                    <dd className="mt-1 text-zinc-600">{item.a}</dd>
                  </div>
                ))}
              </dl>
              <p className="font-inter mt-6 text-sm text-zinc-600">
                Anything else? Email{' '}
                <a href={`mailto:${email}`} className="underline underline-offset-2">
                  {email}
                </a>
                .
              </p>
            </div>
          </div>
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
