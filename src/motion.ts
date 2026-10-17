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

// Pauses an element's looping animations while it is off screen (sets data-offscreen, see
// index.css). SVG animations can't run on the graphics card, so off screen they still cost work
export function usePauseOffscreen<T extends Element>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => el.toggleAttribute('data-offscreen', !entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// Once the arrival wiggle has played, drop it so hovering can wiggle again every time
export function endIntro(e: AnimationEvent<HTMLElement>) {
  e.currentTarget.classList.remove('intro-wiggle', 'intro-wiggle-2')
}
