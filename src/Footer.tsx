import { useEffect, useRef, useState } from 'react'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMastodon,
  FaThreads,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { SiBluesky } from 'react-icons/si'
import logo from './assets/Codetopia Academy - Logo Black.png'
import labsLogo from './assets/codetopia-labs.png'
import { doodleTile } from './doodles'

const email = 'codetopiaacademy@gmail.com'
const labsUrl = 'https://labs.codetopia.org'

const socialIcons = [
  { icon: FaYoutube, href: 'https://www.youtube.com/@codetopiaacademy', label: 'YouTube' },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/codetopiaacademy',
    label: 'LinkedIn',
  },
  { icon: FaXTwitter, href: 'https://x.com/codetopia_aca', label: 'X' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/codetopiaacademy', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/codetopiaacademy/', label: 'Instagram' },
  { icon: FaThreads, href: 'https://www.threads.com/@codetopiaacademy', label: 'Threads' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@codetopiaacademy', label: 'TikTok' },
  {
    icon: SiBluesky,
    href: 'https://bsky.app/profile/codetopiaacademy.bsky.social',
    label: 'Bluesky',
  },
  { icon: FaMastodon, href: 'https://mastodon.social/@codetopiaacademy', label: 'Mastodon' },
  { icon: FaGithub, href: 'https://github.com/codetopiaacademy', label: 'GitHub' },
]

const linkClass = 'font-inter text-sm text-zinc-600 transition-colors hover:text-black'

// Two layers of doodles, built once: big ones in front drifting slowly, small faint ones behind
// drifting faster, over a near-black fill. Together they give depth and hide the repeat
const doodleBackground = [
  doodleTile({ cells: 4, size: 38, seed: 7 }),
  doodleTile({ cells: 6, size: 20, opacity: 0.45, seed: 3 }),
  'linear-gradient(#18181b, #18181b)',
].join(', ')

const word = 'Academy'

// doodles (children's page): each letter is its own piece with doodles flowing through it. The
// pattern lines up across letters because each one shifts its background by its own position.
// Pointing at a letter, or tapping it, makes it hop. Motion only runs while the word is on screen
function Wordmark({ doodles }: { doodles: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting)
        if (entry.intersectionRatio >= 0.3) setVisible(true)
      },
      { threshold: [0, 0.3] },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // tell each letter where it sits, so its slice of the pattern lines up with its neighbours
  useEffect(() => {
    const el = ref.current
    if (!el || !doodles) return
    const place = () => {
      for (const letter of el.children) {
        const span = letter as HTMLElement
        span.style.setProperty('--x', `${-span.offsetLeft}px`)
        span.style.setProperty('--y', `${-span.offsetTop}px`)
      }
    }
    place()
    document.fonts.ready.then(place)
    const resize = new ResizeObserver(place)
    resize.observe(el)
    return () => resize.disconnect()
  }, [doodles])

  const hop = (letter: HTMLElement) => {
    letter.classList.remove('hop')
    void letter.offsetWidth // restart the hop if it was already playing
    letter.classList.add('hop')
  }

  if (!doodles) {
    return (
      <p
        ref={ref}
        aria-hidden="true"
        className={`font-display pointer-events-none text-center leading-[0.8] font-bold tracking-tight text-black/15 uppercase select-none motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-1/2 motion-safe:opacity-0'
        }`}
        style={{ fontSize: '19vw' }}
      >
        {word}
      </p>
    )
  }

  return (
    <p
      ref={ref}
      aria-hidden="true"
      className={`wordmark-doodles font-display relative text-center leading-[0.8] font-bold tracking-tight uppercase select-none motion-safe:transition-all motion-safe:duration-1000 motion-safe:ease-out ${
        onScreen ? 'is-drifting' : ''
      } ${visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-1/2 motion-safe:opacity-0'}`}
      style={{ fontSize: '19vw' }}
    >
      {[...word].map((char, i) => (
        <span
          key={i}
          className="wordmark-letter"
          style={{ backgroundImage: doodleBackground }}
          onPointerEnter={(e) => e.pointerType === 'mouse' && hop(e.currentTarget)}
          onPointerDown={(e) => hop(e.currentTarget)}
          onAnimationEnd={(e) => e.currentTarget.classList.remove('hop')}
        >
          {char}
        </span>
      ))}
    </p>
  )
}

export function Footer({ doodles = false }: { doodles?: boolean }) {
  return (
    <footer className="overflow-hidden bg-white text-black">
      <div className="pt-16">
        <Wordmark doodles={doodles} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 md:flex-row md:justify-between">
        <div className="flex flex-col gap-8">
          <img src={logo} alt="Codetopia Academy" className="h-auto w-44 self-start" />
          <p className="font-mono text-sm tracking-[0.2em] text-zinc-600">
            THINK. BUILD. <span className="font-bold text-black">SOLVE.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-zinc-600 transition-colors hover:text-black"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-sm font-black tracking-tight uppercase">Contact</p>
            <a href={`mailto:${email}`} className={linkClass}>
              {email}
            </a>
            <span className="font-inter text-sm text-zinc-600">Accra, Ghana</span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-sm font-black tracking-tight uppercase">Codetopia</p>
            <a
              href="https://codetopia.org"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              codetopia.org
            </a>
            <a
              href="https://community.codetopia.org"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Community
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-inter text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Codetopia Academy. All rights reserved.{' '}
            <a href="/privacy/" className="underline transition-colors hover:text-black">
              Privacy
            </a>
          </p>
          <p className="text-xs font-black tracking-widest text-zinc-600 uppercase">
            A{' '}
            <a
              href="https://codetopia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              Codetopia
            </a>{' '}
            Initiative
          </p>
        </div>
        <div className="mx-auto flex max-w-6xl justify-center border-t border-zinc-200 px-6 py-6">
          {/* builder's credit: quiet grey, full colour on hover */}
          <a
            href={labsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developed with love by Codetopia Labs"
            className="font-inter group flex items-center gap-1.5 text-xs text-zinc-600 transition-colors hover:text-black"
          >
            Developed with love by
            <img
              src={labsLogo}
              alt=""
              className="h-6 w-auto opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
