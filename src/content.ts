// All site content lives here. Items marked DUMMY are placeholders until the team confirms them.

// Next start date: set it in schedule.ts
export { classStarted, startDate, startLine } from './schedule'

// DUMMY: Google Form link from Barbara
export const registerUrl = '#register'
// DUMMY: label may become 'Book a free taster'
export const registerLabel = 'Register'

export const email = 'codetopiaacademy@gmail.com'
// DUMMY: WhatsApp number in international format, no plus sign
export const whatsapp = '233000000000'

export const fees = 'Fees are shared after you register.'

export const priceAmount = 'GHS 500'
export const pricePer = 'a month'

export type Shape = 'circle' | 'square' | 'triangle' | 'diamond' | 'hexagon'
// say: easy written pronunciation. speak: what the browser voice reads out
export type Meaning = { origin: string; means: string; why: string; say: string; speak: string }
export type Group = {
  id: string
  name: string
  meaning: Meaning
  ages: string
  about: string
  open: boolean
  min: number
  max: number
  level: number // intensity, 1 to 4
  pace: string
  shape: Shape
  color: string // shape fill
  tint: string // panel background
  accent: string // solid background for highlights
}

// DUMMY: which groups open on 7 Nov
export const groups: Group[] = [
  {
    id: 'nova',
    name: 'Nova',
    meaning: {
      say: 'NOH-vuh',
      speak: 'Nova',
      origin: 'Latin',
      means: 'A new star that suddenly lights up.',
      why: 'A new star is just starting to shine. Ages 6 to 8 are where every learner first lights up.',
    },
    ages: '6 to 8',
    about: 'Logic and computer basics through play.',
    open: false,
    min: 6,
    max: 8,
    level: 1,
    pace: 'Playful',
    shape: 'circle',
    color: 'fill-yellow-300',
    tint: 'bg-yellow-50',
    accent: 'bg-yellow-300',
  },
  {
    id: 'orion',
    name: 'Orion',
    meaning: {
      say: 'oh-RYE-un',
      speak: 'Orion',
      origin: 'Greek',
      means: 'One of the brightest groups of stars in the sky.',
      why: 'Orion is easy to spot because it shines so brightly. Ages 9 to 11 is when learners stand out more with their projects.',
    },
    ages: '9 to 11',
    about: 'First steps in coding, through games and animation.',
    open: true,
    min: 9,
    max: 11,
    level: 2,
    pace: 'Hands-on',
    shape: 'square',
    color: 'fill-sky-300',
    tint: 'bg-sky-50',
    accent: 'bg-sky-300',
  },
  {
    id: 'nyota',
    name: 'Nyota',
    meaning: {
      say: 'NYOH-tah',
      speak: 'nyoh-tah',
      origin: 'Swahili',
      means: 'Star.',
      why: 'A star gives off its own light. Ages 12 to 15 shine on their own, with their own code and projects.',
    },
    ages: '12 to 15',
    about: 'Proper programming and bigger projects.',
    open: false,
    min: 12,
    max: 15,
    level: 3,
    pace: 'Proper code',
    shape: 'triangle',
    color: 'fill-emerald-300',
    tint: 'bg-emerald-50',
    accent: 'bg-emerald-300',
  },
  {
    id: 'zenith',
    name: 'Zenith',
    meaning: {
      say: 'ZEN-ith',
      speak: 'Zenith',
      origin: 'Arabic, via Latin',
      means: 'The highest point in the sky.',
      why: 'Nothing sits higher in the sky. Ages 16 to 20 are our top group, getting ready for university and work.',
    },
    ages: '16 to 20',
    about: 'Bigger projects, and skills for university and first jobs.',
    open: false,
    min: 16,
    max: 20,
    level: 4,
    pace: 'Pro level',
    shape: 'diamond',
    color: 'fill-orange-300',
    tint: 'bg-orange-50',
    accent: 'bg-orange-300',
  },
]

// Every learner covers all six, not in a fixed order. Each category has many courses.
export type CategoryId = 'foundations' | 'ai' | 'design' | 'software' | 'hardware' | 'automation'
export type Category = { id: CategoryId; name: string; about: string; feel: string; tint: string; adults: string[] }

// DUMMY: example courses
export const categories: Category[] = [
  {
    id: 'foundations',
    name: 'Computer Foundations',
    about: 'Using a computer well and staying safe online.',
    feel: "Type, save, search, and stay safe online.",
    tint: 'bg-yellow-100',
    adults: ['Technology from Zero', 'Email and Documents', 'Staying Safe Online'],
  },
  {
    id: 'ai',
    name: 'AI and Data',
    about: 'How AI works, how to use it well, and making sense of data.',
    feel: "Ask AI good questions, and know when it's wrong.",
    tint: 'bg-sky-100',
    adults: ['AI Tools for Work', 'Spreadsheets and Data', 'Checking AI Answers'],
  },
  {
    id: 'design',
    name: 'Design and Digital Media',
    about: 'Drawing, animation, video, and how screens should look.',
    feel: "Draw, animate and make their own videos.",
    tint: 'bg-rose-100',
    adults: ['Graphics for Work', 'Slides that Work', 'Video Basics'],
  },
  {
    id: 'software',
    name: 'Software Engineering',
    about: 'Building working programs, games, websites and apps.',
    feel: "Build games, websites and apps that really work.",
    tint: 'bg-emerald-100',
    adults: ['Python from Zero', 'Build a Website', 'Web Apps'],
  },
  {
    id: 'hardware',
    name: 'Hardware and Electronics',
    about: 'Circuits, sensors and robots.',
    feel: "Make lights blink and robots move.",
    tint: 'bg-orange-100',
    adults: ['Electronics Basics', 'Microcontrollers', 'Smart Devices'],
  },
  {
    id: 'automation',
    name: 'Automation',
    about: 'Getting computers to do repetitive work for you.',
    feel: "Get the computer to do the boring bits.",
    tint: 'bg-lime-100',
    adults: ['Automate Your Spreadsheets', 'No-code Automation', 'Automate with Python'],
  },
]

// DUMMY: confirm answers with the team
export const faq = [
  { q: 'My child has never used a computer much. Is that okay?', a: 'Yes. Everyone starts at the beginning, and there is a short device check before the first class.' },
  { q: 'What happens as my child gets older?', a: 'They move up to the next group. The six areas stay the same, but the courses go deeper.' },
  { q: 'What is the showcase?', a: 'At the end of each 4-month module, learners present their project. Family and friends are invited.' },
  { q: 'What do we need at home?', a: 'A laptop or desktop with a keyboard and mouse, and an internet connection. A phone is not enough.' },
]

// DUMMY: real tutors, photos and lines
export const tutors = [
  { name: 'Tutor name', role: 'Orion tutor', line: 'One line about who they are.' },
  { name: 'Tutor name', role: 'Orion tutor', line: 'One line about who they are.' },
  { name: 'Tutor name', role: 'Orion tutor', line: 'One line about who they are.' },
]

export const forParents = [
  'You get a short progress note every month.',
  'Tutors never contact children privately. Everything goes through you.',
  'Every session is recorded, and you are told so.',
  "We never use your child's photo or name without your written consent.",
]

// Adults page

export const adultName = 'Atlas'
export const adultMeaning = {
  say: 'AT-lus',
  speak: 'Atlas',
  origin: 'Greek',
  means: 'The titan who holds up the sky.',
  why: 'Adults carry a lot, from work to family. Our adult classes give you skills that make the load lighter.',
}
export const adultAges = '21+'

// DUMMY: adult start date, null means opening soon
export const adultStart: string | null = null

export const adultHow = [
  'Live evening classes online.',
  'About 5 people per tutor.',
  '8 sessions a month, twice a week.',
  'A mini project every month.',
  'Each module runs 4 months and ends with a bigger project.',
  'Show it at the showcase. Bring family and friends.',
]

export const adultWho = [
  { who: 'Beginners', why: 'Get comfortable with computers, the internet and AI.' },
  { who: 'Students', why: 'Build skills and projects school does not cover.' },
  { who: 'Career switchers', why: 'Take a first step into tech.' },
  { who: 'Working professionals', why: 'Save time at work with the right tools.' },
]

export const adultNeed = [
  'A laptop or desktop and an internet connection.',
  'A short device check before your first class.',
  fees,
]
