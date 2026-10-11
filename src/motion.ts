import { useEffect, useRef, type AnimationEvent } from 'react'

// Adds 'is-visible' the first time an element scrolls into view, for the fade-up
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// Once the arrival wiggle has played, drop it so hovering can wiggle again every time
export function endIntro(e: AnimationEvent<HTMLElement>) {
  e.currentTarget.classList.remove('intro-wiggle', 'intro-wiggle-2', 'intro-wiggle-3')
}
