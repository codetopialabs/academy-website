import { useEffect, useState } from 'react'
import logo from './assets/Codetopia Academy - Logo Variant 1.png'

const words = ['Educate.', 'Empower.', 'Build.', 'Grow.', 'Inspire.']
const sentence = words.join(' ')

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function RotatingWord() {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 4500)
    return () => clearInterval(id)
  }, [reducedMotion])

  return (
    <span className="inline-grid align-bottom" aria-hidden="true">
      {words.map((word, i) => (
        <span
          key={word}
          className={`col-start-1 row-start-1 font-display font-bold transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

function App() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-black px-6 text-center">
      <img
        src={logo}
        alt="Codetopia Academy"
        className="relative z-10 w-[26rem] sm:w-[34rem] md:w-[42rem] lg:w-[52rem]"
      />
      <h1
        className="relative z-10 text-4xl text-white sm:text-6xl md:text-7xl"
        aria-label={sentence}
      >
        <RotatingWord />
      </h1>
      <p className="relative z-10 text-sm tracking-[0.3em] text-zinc-500 uppercase sm:text-base">
        Coming soon
      </p>

      <p className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sm text-zinc-500">
        A{' '}
        <a
          href="https://codetopia.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:opacity-80"
        >
          codetopia.org
        </a>{' '}
        Initiative
      </p>

      <p
        aria-hidden="true"
        className="font-display pointer-events-none absolute inset-x-0 bottom-0 z-0 text-center leading-none font-bold tracking-tight text-white/10 uppercase select-none"
        style={{ fontSize: '19vw' }}
      >
        Academy
      </p>
    </main>
  )
}

export default App
