import logo from './assets/Codetopia Academy - Logo Black.png'
import { Footer } from './Footer'

function App() {
  return (
    <>
      <main
        className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-white px-6 text-center text-black"
        style={{
          backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <img
          src={logo}
          alt="Codetopia Academy"
          className="relative z-10 w-[20rem] sm:w-[28rem] md:w-[34rem]"
        />
        <h1 className="font-display relative z-10 text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl">
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.42em] bg-sky-300"
            />
            <span className="relative">Anticipate.</span>
          </span>
        </h1>
        <p className="relative z-10 font-mono text-xl tracking-[0.2em] text-zinc-500 sm:text-3xl">
          THINK. BUILD. <span className="font-bold text-black">SOLVE.</span>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
