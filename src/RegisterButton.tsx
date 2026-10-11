import { useEffect, useState } from 'react'
import { registerLabel, registerUrl, registrationOpen, registrationSoon } from './content'

// Register button. While registration is closed it stays on the page and shows a short note when clicked
export function RegisterButton({ className, notePlacement = 'above' }: { className: string; notePlacement?: 'above' | 'below' }) {
  const [showNote, setShowNote] = useState(false)

  useEffect(() => {
    if (!showNote) return
    const timer = setTimeout(() => setShowNote(false), 4000)
    return () => clearTimeout(timer)
  }, [showNote])

  if (registrationOpen) {
    return (
      <a href={registerUrl} className={className}>
        {registerLabel}
      </a>
    )
  }

  return (
    <span className="relative inline-flex">
      <button type="button" aria-disabled="true" onClick={() => setShowNote(true)} className={className}>
        {registerLabel}
      </button>
      <span
        role="status"
        className={`font-inter absolute left-1/2 z-30 w-64 -translate-x-1/2 rounded-xl bg-black px-4 py-3 text-center text-sm text-white shadow-lg transition ${
          notePlacement === 'above' ? 'bottom-full mb-3' : 'top-full mt-3'
        } ${showNote ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {showNote && registrationSoon}
      </span>
    </span>
  )
}
