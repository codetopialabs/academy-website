import { Header } from './components'
import { email } from './content'
import { Footer } from './Footer'

// DUMMY: draft wording, to be checked against Ghana's Data Protection Act before launch
const sections = [
  {
    title: 'What we collect',
    lines: [
      "The learner's first name and age.",
      "A parent's name, email and WhatsApp number (or your own, if you are an adult learner).",
      'Your country, so we can plan class times.',
      'Whether you have a laptop and internet.',
    ],
  },
  {
    title: 'Why we collect it',
    lines: [
      'To place you in the right class.',
      'To send you class times, fees and progress notes.',
      'We never sell your information or share it outside the academy team.',
    ],
  },
  {
    title: 'Class recordings',
    lines: [
      'Every online session is recorded, and you are told so.',
      'Recordings are for learners who miss a class and for safety checks.',
      'Only the academy team can see them.',
    ],
  },
  {
    title: 'Photos and names',
    lines: [
      "We never use a child's photo, video or name in public without written consent from a parent.",
    ],
  },
  {
    title: 'Your choices',
    lines: [
      'You can ask to see, correct or delete your information at any time.',
      `Email ${email} and we will reply within 7 days.`,
    ],
  },
]

export function Privacy() {
  return (
    <div className="bg-paper text-black">
      <Header look="kids" />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Privacy</h1>
        <p className="font-inter mt-4 text-zinc-600">
          We collect only what we need to teach you or your child, and we keep it private.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <ul className="font-inter mt-4 space-y-3 text-zinc-600">
              {section.lines.map((line) => (
                <li key={line} className="border-l-2 border-sky-300 pl-4">
                  {line}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
