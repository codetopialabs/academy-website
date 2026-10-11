import { Ending, Header, Marker, NameWithMeaning } from './components'
import {
  adultAges,
  adultFaq,
  adultMeaning,
  adultName,
  adultPriceAmount,
  adultWho,
  classStarted,
  email,
  pricePer,
  startDate,
  startLine,
  whatsapp,
} from './content'
import { Footer } from './Footer'
import { RegisterButton } from './RegisterButton'
import { AreaCards, PriceTag, Questions, Section, TutorCarousel } from './sections'
import { button } from './styles'

// Same layout and feel as the children's page, without the kids' doodles
export function Adults() {
  return (
    <div className="overflow-x-clip bg-white text-black">
      <Header look="adults" />

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-end md:pt-28">
          <div>
            <p className="font-mono text-sm tracking-[0.2em] text-zinc-600 uppercase">
              <NameWithMeaning name={adultName} meaning={adultMeaning} className="uppercase" /> · Ages {adultAges}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Tech skills that <Marker>fit your week.</Marker>
            </h1>
            <p className="font-inter mt-8 max-w-xl text-lg text-zinc-700">
              Small live classes online, twice a week. Evenings or weekends, you choose. Taught by
              trained tutors, in groups of about five.
            </p>
            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <RegisterButton className={`${button('adults')} shrink-0 whitespace-nowrap`} />
              <PriceTag amount={adultPriceAmount} per={pricePer} />
            </div>
            <p className="font-inter mt-6 text-zinc-700">{startLine}</p>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter mt-3 inline-block text-sm underline underline-offset-4"
            >
              Questions? Message us on WhatsApp
            </a>
          </div>
          {/* DUMMY photo from Unsplash (free licence), by Vitaly Gariev (s3hlZ-gdfdQ). Swap for a real class photo */}
          <img
            src="/hero/adults.jpg"
            alt="A woman smiling while working on her laptop"
            className="mx-4 aspect-[4/5] rounded-2xl object-cover object-[58%_50%] md:mx-0"
          />
        </section>

        <Section title="How it works">
          <div className="font-inter max-w-2xl space-y-5 text-lg text-zinc-700">
            <p>
              Every class is live on video, with a trained tutor and a small group of about five. You
              meet twice a week, in the evening or at the weekend, whichever suits you. Need more or
              fewer lessons? We adjust them to fit your schedule.
            </p>
            <p>
              Each month, you finish a small project. Every four months you finish a bigger one for your
              portfolio and present it at our showcase.
            </p>
          </div>
        </Section>

        <Section title="Who it's for">
          <dl className="grid gap-8 sm:grid-cols-2">
            {adultWho.map((item) => (
              <div key={item.who}>
                <dt className="font-display text-xl font-bold">{item.who}</dt>
                <dd className="font-inter mt-2 text-zinc-700">{item.why}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="What you'll learn">
          <p className="font-inter text-lg text-zinc-700">Six areas. You get to try them all.</p>
          <AreaCards audience="adults" />
        </Section>

        <Section title="Who teaches">
          <p className="font-inter max-w-2xl text-lg text-zinc-700">
            We choose and train our own tutors, and check every one before they teach.
          </p>
        </Section>
        <TutorCarousel />

        <Section title="Common questions">
          <Questions items={adultFaq} />
          <p className="font-inter mt-6 text-sm text-zinc-600">
            Anything else? Email{' '}
            <a href={`mailto:${email}`} className="underline underline-offset-2">
              {email}
            </a>
            .
          </p>
        </Section>

        <Ending
          look="adults"
          title={
            classStarted ? (
              <>
                You can still join <Marker>this week.</Marker>
              </>
            ) : (
              <>
                Next class starts on <Marker>{startDate}.</Marker>
              </>
            )
          }
        />
      </main>

      <Footer />
    </div>
  )
}
