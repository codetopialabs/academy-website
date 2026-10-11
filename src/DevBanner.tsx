import { useState } from 'react'
import { underDevelopment } from './content'

const storageKey = 'dev-banner-closed'

// Thin note at the very top while the site is being built. Closing it lasts for this visit
export function DevBanner() {
  const [closed, setClosed] = useState(() => {
    try {
      return sessionStorage.getItem(storageKey) === '1'
    } catch {
      return false
    }
  })

  if (!underDevelopment || closed) return null

  const close = () => {
    setClosed(true)
    try {
      sessionStorage.setItem(storageKey, '1')
    } catch {
      // storage can be blocked; the note just comes back next time
    }
  }

  return (
    <div className="font-inter relative bg-zinc-900 px-10 py-2 text-center text-sm text-white">
      We're still building this site, so a few things may not work yet.
      <button
        type="button"
        onClick={close}
        aria-label="Close this note"
        className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-lg leading-none text-zinc-300 hover:bg-white/10 hover:text-white"
      >
        ×
      </button>
    </div>
  )
}
