import { useState, type ReactNode } from 'react'
import { NameWithMeaning } from './components'
import { adultMeaning, adultName, groups, startLine } from './content'
import { SketchShape } from './doodles'

const minAge = 6
const adultAge = 21

// Pick an age, see the group it belongs to
// The heading and intro come in as children and sit at the top of the same coloured band
export function AgePicker({ children }: { children?: ReactNode }) {
  const [age, setAge] = useState(9)
  const group = groups.find((g) => age >= g.min && age <= g.max)

  const stepButton =
    'flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white text-2xl transition hover:border-black disabled:opacity-30'

  return (
    <div className={`transition-colors ${group ? group.tint : 'bg-zinc-100'}`}>
      {children && (
        <div className="mx-auto grid max-w-6xl gap-6 px-4 pt-16 sm:px-6 md:grid-cols-[1fr_2fr] md:gap-12 md:pt-20 [&_svg]:md:mt-6 [&_svg]:md:h-20 [&_svg]:md:w-20">
          {children}
        </div>
      )}
      <div className={`mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 md:grid-cols-2 md:pb-20 ${children ? 'pt-6 md:pt-8' : 'pt-16 md:pt-20'}`}>
        <div>
          <p className="font-inter text-zinc-600">How old is your child?</p>
          <div className="mt-4 flex items-center gap-6">
            <button type="button" aria-label="Younger" className={stepButton} disabled={age <= minAge} onClick={() => setAge(age - 1)}>
              −
            </button>
            <p key={age} className="pop font-display w-32 text-center text-7xl font-bold tabular-nums" aria-live="polite">
              {age >= adultAge ? (
                <>
                  21<span className="align-top text-4xl">+</span>
                </>
              ) : (
                age
              )}
            </p>
            <button type="button" aria-label="Older" className={stepButton} disabled={age >= adultAge} onClick={() => setAge(age + 1)}>
              +
            </button>
          </div>
          <ul className="font-inter mt-10 space-y-2 text-sm">
            {groups.map((g) => (
              <li key={g.id}>
                <button
                  type="button"
                  onClick={() => setAge(g.min)}
                  className={`flex items-center gap-3 ${g === group ? 'font-bold text-black' : 'text-zinc-600 hover:text-black'}`}
                >
                  <SketchShape shape={g.shape} color={g.color} className="h-4 w-4" />
                  {g.name}, ages {g.ages}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setAge(adultAge)}
                className={`flex items-center gap-3 ${group ? 'text-zinc-600 hover:text-black' : 'font-bold text-black'}`}
              >
                <SketchShape shape="hexagon" color="fill-zinc-300" className="h-4 w-4" />
                {adultName}, ages 21+ (adults)
              </button>
            </li>
          </ul>
        </div>

        {group ? (
          <div key={group.id} className="fade-up">
            <SketchShape shape={group.shape} color={group.color} className="h-12 w-12" />
            <div className="mt-4 flex items-center gap-3">
              <p className="font-display text-5xl font-bold tracking-tight">
                <NameWithMeaning name={group.name} meaning={group.meaning} />
              </p>
            </div>
            <p className="mt-3 font-mono text-sm text-zinc-600">/ {group.meaning.say} /</p>
            <p className="font-inter mt-2 text-zinc-600">Ages {group.ages}</p>
            <p className="font-inter mt-6 max-w-md text-xl">{group.about}</p>
            <p className="font-inter mt-6 text-sm text-zinc-600">{startLine}</p>
          </div>
        ) : (
          <div className="fade-up">
            <SketchShape shape="hexagon" color="fill-zinc-300" className="h-12 w-12" />
            <div className="mt-4 flex items-center gap-3">
              <p className="font-display text-5xl font-bold tracking-tight">
                <NameWithMeaning name={adultName} meaning={adultMeaning} />
              </p>
            </div>
            <p className="mt-3 font-mono text-sm text-zinc-600">/ {adultMeaning.say} /</p>
            <p className="font-inter mt-2 text-zinc-600">Ages 21+</p>
            <p className="font-inter mt-6 max-w-md text-xl">Classes for adults.</p>
            <a href="/adults/" className="font-inter mt-6 inline-block text-sm font-bold underline underline-offset-4">
              See adult classes
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
