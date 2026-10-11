import { Ending, Header, Marker } from './components'
import { email, faq, forParents, priceAmount, pricePer, registerLabel, registerUrl, startDate, startLine, classStarted, whatsapp } from './content'
import { IdeaIcon, type Idea } from './doodles'
import { AgePicker } from './Explorer'
import { endIntro } from './motion'
import { AreaCards, PriceTag, Questions, Section, SectionTitle, TutorCarousel } from './sections'
import { Footer } from './Footer'
import { button } from './styles'

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
  return (
    <div aria-hidden="true" className="photo-columns grid aspect-[4/5] grid-cols-2 gap-3 overflow-hidden rounded-2xl">
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
        {edgeIcons.map((icon) => (
          <IdeaIcon key={icon.top + icon.name} name={icon.name} className={`absolute hidden h-14 w-14 xl:block ${icon.top} ${icon.side} ${icon.color}`} />
        ))}
        <div className="relative overflow-hidden bg-cream">
        <section className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-end md:pt-28">
          <div>
            <p onAnimationEnd={endIntro} className="sticker intro-wiggle inline-flex -rotate-2 items-center gap-1.5 rounded-md border-2 border-black bg-sun px-3 py-1 font-mono text-xs font-bold tracking-wide shadow-[2px_2px_0_0_#000] sm:text-sm">
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
              <a href={registerUrl} className={`${button('kids')} shrink-0 whitespace-nowrap`}>
                {registerLabel} ›
              </a>
              <PriceTag amount={priceAmount} per={pricePer} intro />
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
            <HeroGrid />
            <IdeaIcon name="controller" className="absolute -top-12 -right-6 h-20 w-20 -rotate-12 text-sky-400" />
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
              one and present it at our showcase. Family and friends are welcome. And every new learner
              starts with a welcome pack from us.
            </p>
          </div>
        </Section>

        {/* Welcome pack: its own banner so the hero stays calm */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
            <IdeaIcon name="gift" className="h-10 w-10 shrink-0 text-orange-500" />
            <div>
              <p className="font-display text-lg leading-tight font-bold sm:text-xl">Every new learner gets a welcome pack.</p>
              <p className="font-inter mt-1 text-zinc-700">Our way of saying welcome to the Academy.</p>
            </div>
          </div>
        </div>

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
          <AreaCards audience="kids" />
        </Section>

        <div className="bg-mist">
          <Section title="Who teaches" icons={[{ name: 'star', color: 'text-yellow-400' }, { name: 'search', color: 'text-sky-400' }]}>
            <p className="font-inter max-w-2xl text-lg text-zinc-700">
              We choose and train our own tutors, and check every one before they teach.
            </p>
          </Section>
          <TutorCarousel />
        </div>

        <Section title="For parents" icons={[{ name: 'shield', color: 'text-emerald-400' }, { name: 'lock', color: 'text-sky-400' }, { name: 'heart', color: 'text-orange-400' }]}>
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
          shapes
          band="bg-sun"
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
