import { DealSticker, Ending, Header, Marker } from './components'
import { classTimes, email, faq, forParents, priceAmount, pricePer, referralDiscount, saveLink, saveTitle, siblingDiscount, startDate, startLine, classStarted, whatsapp } from './content'
import { GiftBox, IdeaIcon, type Idea } from './doodles'
import { AgePicker } from './Explorer'
import { RegisterButton } from './RegisterButton'
import { usePauseOffscreen } from './motion'
import { AreaCards, DiscountCards, PriceTag, TutorsHeading, Questions, Section, SectionTitle, TutorCarousel } from './sections'
import { Footer } from './Footer'
import { button } from './styles'

// Abstract tiles for now: a brand colour with a big hand-drawn icon. Swap for real class photos later
type HeroTile = { bg: string; icon: Idea; height: string; tilt: string }
const leftTiles: HeroTile[] = [
  { bg: 'bg-sun', icon: 'bulb', height: 'h-72', tilt: '-rotate-6' },
  { bg: 'bg-sky-300', icon: 'controller', height: 'h-56', tilt: 'rotate-6' },
  { bg: 'bg-emerald-300', icon: 'blocks', height: 'h-64', tilt: '-rotate-3' },
]
const rightTiles: HeroTile[] = [
  { bg: 'bg-orange-300', icon: 'robot', height: 'h-52', tilt: 'rotate-3' },
  { bg: 'bg-rose-200', icon: 'brush', height: 'h-72', tilt: '-rotate-6' },
  { bg: 'bg-sky-100', icon: 'braces', height: 'h-56', tilt: 'rotate-6' },
]

// One column of tiles, repeated twice so the loop is seamless
function TileColumn({ tiles, direction }: { tiles: HeroTile[]; direction: 'up' | 'down' }) {
  return (
    <div className="overflow-hidden">
      <div className={direction === 'up' ? 'scroll-up' : 'scroll-down'}>
        {[...tiles, ...tiles].map((tile, i) => (
          <div key={i} className={`mb-3 flex items-center justify-center rounded-2xl ${tile.bg} ${tile.height}`}>
            <IdeaIcon name={tile.icon} className={`h-28 w-28 text-black ${tile.tilt}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Two columns of tiles in the hero: the left scrolls up, the right scrolls down
function HeroGrid() {
  const columnsRef = usePauseOffscreen<HTMLDivElement>()
  return (
    <div ref={columnsRef} aria-hidden="true" className="photo-columns grid aspect-[4/5] grid-cols-2 gap-3 overflow-hidden rounded-2xl">
      <TileColumn tiles={leftTiles} direction="up" />
      <TileColumn tiles={rightTiles} direction="down" />
    </div>
  )
}

function App() {
  return (
    <div className="overflow-x-clip bg-white text-black">
      <Header look="kids" />

      <main className="relative">
        <div className="relative overflow-hidden bg-cream">
        <section className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-end md:pt-28">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-md bg-sun px-3 py-1 font-mono text-xs font-bold tracking-wide sm:text-sm">
              <span aria-hidden="true">⚠</span> Warning: they might start fixing everything.
            </p>
            <h1 className="font-display mt-6 text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Learn tech.</span>
              <span className="block">
                Build <Marker>cool stuff.</Marker>
              </span>
            </h1>
            <p className="font-inter mt-8 max-w-xl text-lg text-zinc-700">
              Online, in small groups of about five, every Saturday and Sunday. For all ages, taught
              by trained tutors who know every learner by name.
            </p>
            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <RegisterButton className={`${button('kids')} shrink-0 whitespace-nowrap`} noteAlign="start" />
              <PriceTag amount={priceAmount} per={pricePer} intro />
            </div>
            <p className="font-inter mt-6 text-zinc-700">{startLine}</p>
            <DealSticker label={saveLink} />
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter mt-3 inline-block text-sm underline underline-offset-4"
            >
              Questions? Message us on WhatsApp
            </a>
          </div>
          <div className="relative mx-4 md:mx-0">
            <HeroGrid />
            <IdeaIcon name="controller" className="absolute -top-12 -right-6 h-20 w-20 -rotate-12 text-sky-400" />
            <IdeaIcon name="robot" className="absolute -right-8 -bottom-8 h-24 w-24 rotate-6 text-orange-400" />
          </div>
        </section>
        </div>

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
            <p className="flex items-center gap-3 rounded-2xl bg-orange-100 p-4 text-lg font-bold text-black">
              <GiftBox className="h-9 w-9 shrink-0 text-orange-500" />
              <span>
                And when your child joins, we send a little{' '}
                <span className="underline decoration-orange-400 decoration-2 underline-offset-4">welcome pack</span> their way.
              </span>
            </p>
          </div>
        </Section>

        <div className="bg-orange-50">
          <Section title={saveTitle} id="save">
            <DiscountCards items={[siblingDiscount, referralDiscount]} />
          </Section>
        </div>

        <AgePicker>
          <SectionTitle title="Find your child's group" icon={{ name: 'puzzle', color: 'text-emerald-500' }} />
          <p className="font-inter max-w-2xl text-lg text-zinc-700">
            Children are grouped by age, so everyone learns with others at their level. Tap a group name
            to see what it means.
          </p>
        </AgePicker>

        <Section title="What they learn">
          <p className="font-inter text-lg text-zinc-700">
            Six areas. Every learner gets to try them all.
          </p>
          <AreaCards audience="kids" />
        </Section>

        <div className="bg-mist">
          <TutorsHeading />
          <TutorCarousel />
        </div>

        <Section title="For parents">
          <h3 className="font-bold">Keeping your child safe</h3>
          <ul className="font-inter mt-4 list-disc space-y-2 pl-5 text-zinc-700 marker:text-zinc-400">
            {forParents.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h3 className="mt-12 font-bold">Common questions</h3>
          <Questions items={faq} />
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
          band="bg-yellow-100"
          note={classTimes}
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

      <Footer doodles />
    </div>
  )
}

export default App
