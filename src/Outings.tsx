import { useEffect, useRef, useState } from 'react'
import { FaArrowUpRightFromSquare, FaPlay, FaXmark } from 'react-icons/fa6'
import { outings, type Outing } from './content'
import { useReveal } from './motion'

// Where Codetopia Academy has been, in the style of the Community site's "The impact":
// in the academy's colours: the latest outing beside its words, older ones in a two-column grid under it
export function Outings() {
  const ref = useReveal<HTMLElement>()
  const [playing, setPlaying] = useState<Outing | null>(null)
  if (outings.length === 0) return null
  const [latest, ...rest] = outings
  return (
    <section ref={ref} className="reveal w-full py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-[1320px]">
        <div className="mb-14 flex flex-col gap-6 md:mb-20">
          <h2 className="font-display text-5xl leading-none font-bold tracking-tighter uppercase md:text-8xl">Where we've been</h2>
          <p className="font-inter max-w-2xl text-lg text-zinc-700 md:text-xl">The events and programmes Codetopia Academy has taken part in.</p>
        </div>

        <div className="flex flex-col gap-0.5 border-2 border-black bg-black">
          <Feature outing={latest} onPlay={() => setPlaying(latest)} />
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
              {rest.map((outing, i) => (
                // an odd one out at the end takes the full row, so no empty box is left beside it
                <Card key={outing.title} outing={outing} wide={rest.length % 2 === 1 && i === rest.length - 1} onPlay={() => setPlaying(outing)} />
              ))}
            </div>
          )}
        </div>
      </div>
      {playing && <VideoPlayer outing={playing} onClose={() => setPlaying(null)} />}
    </section>
  )
}

// The photo, in colour; plays the video when clicked
function Photo({ outing, onPlay, className }: { outing: Outing; onPlay: () => void; className: string }) {
  return (
    <button type="button" onClick={onPlay} aria-label={`Play video: ${outing.title}`} className={`group relative block w-full overflow-hidden bg-zinc-200 ${className}`}>
      <img
        src={outing.photo}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <span className="absolute top-4 left-4 inline-flex h-14 w-14 items-center justify-center border-2 border-black bg-sun text-black transition-colors group-hover:bg-white">
        <FaPlay aria-hidden="true" className="text-xs" />
      </span>
    </button>
  )
}

function Meta({ outing }: { outing: Outing }) {
  return (
    <span className="block font-mono text-xs leading-relaxed tracking-widest text-zinc-600 uppercase">
      {outing.date} · {outing.place}
    </span>
  )
}

// Watch and photos: plain labels, like the Community site
function Extras({ outing, onPlay }: { outing: Outing; onPlay: () => void }) {
  return (
    <span className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs font-bold tracking-widest text-black uppercase">
      <button type="button" onClick={onPlay} className="inline-flex items-center gap-2 uppercase underline-offset-4 hover:underline">
        <FaPlay aria-hidden="true" className="text-[10px]" /> Video · {outing.length}
      </button>
      {outing.album && (
        <a href={outing.album} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
          <FaArrowUpRightFromSquare aria-hidden="true" className="text-[10px]" /> Gallery
        </a>
      )}
    </span>
  )
}

function Feature({ outing, onPlay }: { outing: Outing; onPlay: () => void }) {
  return (
    <article className="flex flex-col bg-white lg:grid lg:grid-cols-5">
      <Photo outing={outing} onPlay={onPlay} className="aspect-[16/10] lg:col-span-3 lg:aspect-auto lg:h-[clamp(420px,58vh,520px)]" />
      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:col-span-2 lg:justify-center lg:p-10">
        <span className="font-mono self-start bg-sun px-2 py-1 text-xs font-bold tracking-widest uppercase">Latest</span>
        <Meta outing={outing} />
        <h3 className="font-display text-3xl leading-[0.95] font-bold tracking-tighter break-words uppercase sm:text-5xl">
          {outing.title}
        </h3>
        <p className="font-inter text-lg leading-relaxed text-zinc-700">{outing.about}</p>
        <Extras outing={outing} onPlay={onPlay} />
      </div>
    </article>
  )
}

function Card({ outing, wide, onPlay }: { outing: Outing; wide: boolean; onPlay: () => void }) {
  return (
    <article className={`flex flex-col bg-white ${wide ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      <Photo outing={outing} onPlay={onPlay} className="aspect-[16/10]" />
      <div className={`flex flex-1 flex-col gap-4 p-6 sm:p-8 ${wide ? 'md:justify-center' : ''}`}>
        <Meta outing={outing} />
        <h3 className="font-display text-2xl leading-[0.95] font-bold tracking-tighter break-words uppercase sm:text-3xl">
          {outing.title}
        </h3>
        <p className="font-inter line-clamp-2 text-base leading-relaxed text-zinc-700">{outing.about}</p>
        <span className="mt-auto pt-2">
          <Extras outing={outing} onPlay={onPlay} />
        </span>
      </div>
    </article>
  )
}

// The Short is portrait, so it plays in a tall player over the page
function VideoPlayer({ outing, onClose }: { outing: Outing; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" aria-label="Close video" onClick={onClose} className="absolute inset-0 cursor-default bg-black/85" />
      <div role="dialog" aria-modal="true" aria-label={outing.title} className="relative aspect-[9/16] h-[min(85vh,760px)] max-w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${outing.video}?autoplay=1&rel=0`}
          title={outing.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full bg-black"
        />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-0 -right-12 flex h-10 w-10 items-center justify-center bg-white text-lg transition hover:bg-zinc-200 max-sm:-top-12 max-sm:right-0"
        >
          <FaXmark aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
