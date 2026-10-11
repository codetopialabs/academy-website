import { useEffect, useRef } from 'react'
import { FaGithub, FaGlobe, FaInstagram, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6'
import { groups, type Tutor } from './content'
import { SketchShape } from './doodles'

const socialIcons = {
  linkedin: { icon: FaLinkedinIn, label: 'LinkedIn' },
  x: { icon: FaXTwitter, label: 'X' },
  instagram: { icon: FaInstagram, label: 'Instagram' },
  github: { icon: FaGithub, label: 'GitHub' },
  website: { icon: FaGlobe, label: 'Website' },
}

// Tutor profile, opened by clicking a tutor card
export function TutorModal({ tutor, onClose }: { tutor: Tutor; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const group = groups.find((g) => g.id === tutor.group)
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
      <button type="button" aria-label="Close profile" onClick={onClose} className="absolute inset-0 cursor-default bg-black/60" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutor-name"
        className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-[2fr_3fr]"
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

        <div className="aspect-[4/5] bg-zinc-100 md:aspect-auto">
          {tutor.photo ? (
            <img src={tutor.photo} alt={tutor.name} className="h-full w-full object-cover" />
          ) : (
            <div className="font-inter flex h-full items-center justify-center text-sm text-zinc-400">Tutor photo</div>
          )}
        </div>

        <div className="p-6 sm:p-10">
          {group && (
            <p className="font-inter flex items-center gap-2 text-sm text-zinc-600">
              <SketchShape shape={group.shape} color={group.color} className="h-4 w-4" />
              Teaches {group.name}, ages {group.ages}
            </p>
          )}
          <h2 id="tutor-name" className="font-display mt-3 pr-10 text-4xl leading-tight font-bold tracking-tight">
            {tutor.name}
          </h2>
          {tutor.bio && <p className="font-inter mt-6 text-lg text-zinc-700">{tutor.bio}</p>}

          {socials.length > 0 && (
            <div className="mt-8">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">Find them online</p>
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
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 transition hover:border-black hover:bg-zinc-50"
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
