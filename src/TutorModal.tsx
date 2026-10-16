import { useEffect, useRef } from 'react'
import { FaGithub, FaGlobe, FaInstagram, FaLinkedinIn, FaUserGroup, FaXmark, FaXTwitter } from 'react-icons/fa6'
import logo from './assets/Codetopia Academy - Logo Variant 1.png'
import type { Tutor } from './content'

const socialIcons = {
  linkedin: { icon: FaLinkedinIn, label: 'LinkedIn' },
  x: { icon: FaXTwitter, label: 'X' },
  instagram: { icon: FaInstagram, label: 'Instagram' },
  github: { icon: FaGithub, label: 'GitHub' },
  portal: { icon: FaUserGroup, label: 'Codetopia Community profile' },
  website: { icon: FaGlobe, label: 'Website' },
}

// Tutor profile, opened by clicking a tutor card
export function TutorModal({ tutor, onClose }: { tutor: Tutor; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const socials = Object.entries(tutor.socials ?? {}).filter(([, url]) => url) as [keyof typeof socialIcons, string][]

  // close on Esc, stop the page scrolling behind, and put focus on the close button
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
      <button type="button" aria-label="Close profile" onClick={onClose} className="absolute inset-0 cursor-default bg-black/75" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutor-name"
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl md:h-[min(640px,88vh)] md:grid-cols-[5fr_6fr] md:overflow-hidden"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-lg transition hover:border-black"
        >
          <FaXmark aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/5] bg-zinc-100 md:aspect-auto md:h-full">
          {tutor.photo ? (
            <>
              <img src={tutor.photo} alt={tutor.name} className="h-full w-full object-cover" />
              {/* academy logo in the corner, over a soft fade so it reads on light photos */}
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <img src={logo} alt="" className="absolute bottom-5 left-5 h-auto w-36 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:w-44" />
            </>
          ) : (
            <div className="font-inter flex h-full items-center justify-center text-sm text-zinc-400">Tutor photo</div>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 md:overflow-y-auto md:p-14">
          <h2 id="tutor-name" className="font-display pr-10 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            {tutor.name}
          </h2>
          {tutor.bio && <p className="font-inter mt-6 text-lg leading-relaxed text-zinc-700 md:text-xl">{tutor.bio}</p>}

          {socials.length > 0 && (
            <div className="mt-10">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-600 uppercase">Find them online</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(([kind, url]) => {
                  const { icon: Icon, label } = socialIcons[kind]
                  return (
                    <a
                      key={kind}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-lg transition hover:border-black hover:bg-zinc-50"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
