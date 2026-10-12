import { useEffect, useState } from 'react'
import { registerLabel, registerUrl, registrationOpen, registrationSoon } from './content'

// Register button. While registration is closed it stays on the page and shows a short note when clicked
// fullOnMobile: stretches the button across the screen on phones, like the button next to it
export function RegisterButton({
  className,
  notePlacement = 'above',
  noteAlign = 'center',
  fullOnMobile = false,
}: {
  className: string
  notePlacement?: 'above' | 'below'
  // which edge the note lines up with, so it never runs off the screen
  noteAlign?: 'start' | 'center' | 'end'
  fullOnMobile?: boolean
}) {
  const [showNote, setShowNote] = useState(false)

  useEffect(() => {
    if (!showNote) return
    const timer = setTimeout(() => setShowNote(false), 4000)
    return () => clearTimeout(timer)
  }, [showNote])

  if (registrationOpen) {
    return (
      <a href={registerUrl} target="_blank" rel="noopener noreferrer" className={`${className} ${fullOnMobile ? 'w-full sm:w-auto' : ''}`}>
        {registerLabel}
      </a>
    )
  }

  return (
    <span className={`relative ${fullOnMobile ? 'flex w-full sm:inline-flex sm:w-auto' : 'inline-flex'}`}>
      <button
        type="button"
        aria-disabled="true"
        onClick={() => setShowNote(true)}
        className={`${className} ${fullOnMobile ? 'w-full sm:w-auto' : ''}`}
      >
        {registerLabel}
      </button>
      <span
        role="status"
        className={`font-inter absolute z-30 w-64 max-w-[calc(100vw-2rem)] rounded-xl bg-black px-4 py-3 text-center text-sm text-white shadow-lg transition ${
          noteAlign === 'start' ? 'left-0' : noteAlign === 'end' ? 'right-0' : 'left-1/2 -translate-x-1/2'
        } ${
          notePlacement === 'above' ? 'bottom-full mb-3' : 'top-full mt-3'
        } ${showNote ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {showNote && registrationSoon}
      </span>
    </span>
  )
}
