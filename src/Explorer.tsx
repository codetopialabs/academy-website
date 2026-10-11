import { useState } from 'react'
import { NameWithMeaning } from './components'
import { adultMeaning, adultName, categories, groups, startDate, type CategoryId } from './content'
import { CategoryIcon, Note, SketchShape, Star } from './doodles'

const minAge = 6
const adultAge = 21

function Stepper({ age, setAge }: { age: number; setAge: (age: number) => void }) {
  const stepButton =
    'font-display flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-3xl font-bold transition hover:bg-zinc-100 disabled:opacity-25'
  return (
    <div className="flex items-center gap-5">
      <button type="button" aria-label="Younger" className={stepButton} disabled={age <= minAge} onClick={() => setAge(age - 1)}>
        −
      </button>
      <p className={`font-display w-32 text-center font-bold tabular-nums sm:w-40 ${age >= adultAge ? "text-6xl sm:text-7xl" : "text-7xl sm:text-8xl"}`} aria-live="polite">
        {age >= adultAge ? '21+' : age}
      </p>
      <button type="button" aria-label="Older" className={stepButton} disabled={age >= adultAge} onClick={() => setAge(age + 1)}>
        +
      </button>
    </div>
  )
}

function Intensity({ level }: { level: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`Intensity ${level} of 4`}>
      {[1, 2, 3, 4].map((n) => (
        <Star key={n} className="h-6 w-6 text-black" fillClass={n <= level ? 'fill-black' : ''} />
      ))}
    </span>
  )
}

export function Explorer() {
  const [age, setAge] = useState(9)
  const [categoryId, setCategoryId] = useState<CategoryId>('software')

  const group = groups.find((g) => age >= g.min && age <= g.max)
  const categoryIndex = categories.findIndex((c) => c.id === categoryId)
  const category = categories[categoryIndex]

  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white">
      {/* age and group */}
      <div className={`grid gap-10 p-6 transition-colors sm:p-10 md:grid-cols-2 ${group ? group.tint : 'bg-zinc-100'}`}>
        <div>
          <Note>how old is your child?</Note>
          <div className="mt-4">
            <Stepper age={age} setAge={setAge} />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setAge(g.min)}
                className={`flex items-center gap-2 rounded-full border-2 px-3 py-1.5 text-sm font-bold transition ${
                  g === group ? `border-black ${g.accent}` : 'border-black/15 bg-white/70 hover:border-black/40'
                }`}
              >
                <SketchShape shape={g.shape} color={g.color} className="h-4 w-4" />
                {g.name}
                <span className="font-mono text-xs font-normal">
                  {g.min}–{g.max}
                </span>
              </button>
            ))}
          </div>
        </div>

        {group ? (
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <SketchShape shape={group.shape} color={group.color} className="h-14 w-14" />
              <div>
                <p className="font-display text-5xl font-bold tracking-tight">
                  <NameWithMeaning name={group.name} meaning={group.meaning} />
                </p>
                <p className="font-hand text-2xl text-zinc-600">ages {group.ages}</p>
              </div>
            </div>
            <p className="font-inter mt-5 text-lg text-zinc-700">{group.about}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
              <Intensity level={group.level} />
              <span className="font-hand text-2xl">{group.pace}</span>
              <span
                className={`rounded-full px-3 py-1 font-mono text-xs ${
                  group.open ? 'bg-black text-white' : 'border border-black/15 bg-white/70 text-zinc-500'
                }`}
              >
                {group.open ? `Starts ${startDate}` : 'Opening soon'}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <p className="font-display text-5xl font-bold tracking-tight">
              <NameWithMeaning name={adultName} meaning={adultMeaning} />
            </p>
            <p className="font-inter mt-4 text-lg text-zinc-700">
              21 or older? We have evening classes for adults.
            </p>
            <a href="/adults/" className="mt-6 self-start rounded-full bg-black px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800">
              See adult classes ›
            </a>
          </div>
        )}
      </div>

      {/* categories and courses for this age */}
      {group && (
        <div className="border-t-2 border-black p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <Note>pick an area</Note>
            <Note className="text-lg text-zinc-500">all six, one after another</Note>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategoryId(c.id)}
                aria-pressed={c.id === categoryId}
                className={`flex flex-col items-start gap-3 rounded-2xl border-2 p-4 text-left transition ${
                  c.id === categoryId ? `border-black ${group.accent}` : 'border-black/10 hover:border-black/40'
                }`}
              >
                <span className="flex w-full items-start justify-between">
                  <CategoryIcon id={c.id} className="h-9 w-9" />
                  <span className="font-hand text-2xl leading-none font-bold">{i + 1}</span>
                </span>
                <span className="text-sm leading-tight font-bold">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-inter text-zinc-600">
              <span className="font-bold text-black">{category.name}.</span> {category.about}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
