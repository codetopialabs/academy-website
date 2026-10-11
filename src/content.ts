// All site content lives here. Items marked DUMMY are placeholders until the team confirms them.

export const startDate = 'Saturday 7 November'

// DUMMY: Google Form link from Barbara
export const registerUrl = '#register'
// DUMMY: label may become 'Book a free taster'
export const registerLabel = 'Register'

export const email = 'codetopiaacademy@gmail.com'
// DUMMY: WhatsApp number in international format, no plus sign
export const whatsapp = '233000000000'

export const fees = 'Fees are shared after you register.'

export type Shape = 'circle' | 'square' | 'triangle' | 'diamond'
export type Meaning = { origin: string; means: string; why: string }
export type Group = {
  id: string
  name: string
  meaning: Meaning
  ages: string
  about: string
  open: boolean
  shape: Shape
  color: string // shape fill
  tint: string // panel background
}

// DUMMY: which groups open on 7 Nov
export const groups: Group[] = [
  {
    id: 'nova',
    name: 'Nova',
    meaning: {
      origin: 'Latin',
      means: 'A new star that suddenly lights up.',
      why: 'This is where every learner first lights up.',
    },
    ages: '6 to 8',
    about: 'Logic and computer basics through play.',
    open: false,
    shape: 'circle',
    color: 'fill-yellow-300',
    tint: 'bg-yellow-50',
  },
  {
    id: 'orion',
    name: 'Orion',
    meaning: {
      origin: 'Greek',
      means: 'One of the brightest groups of stars in the sky.',
      why: 'This is where learners start to shine and build their first real things.',
    },
    ages: '9 to 11',
    about: 'First real steps in coding, through games and animation.',
    open: true,
    shape: 'square',
    color: 'fill-sky-300',
    tint: 'bg-sky-50',
  },
  {
    id: 'nyota',
    name: 'Nyota',
    meaning: {
      origin: 'Swahili',
      means: 'Star.',
      why: 'Learners now shine on their own, with real code and real projects.',
    },
    ages: '12 to 15',
    about: 'Real programming and real projects.',
    open: false,
    shape: 'triangle',
    color: 'fill-emerald-300',
    tint: 'bg-emerald-50',
  },
  {
    id: 'zenith',
    name: 'Zenith',
    meaning: {
      origin: 'Arabic, via Latin',
      means: 'The highest point in the sky.',
      why: 'The top of the ladder, ready for university and work.',
    },
    ages: '16 to 20',
    about: 'Bigger projects, and skills for university and first jobs.',
    open: false,
    shape: 'diamond',
    color: 'fill-orange-300',
    tint: 'bg-orange-50',
  },
]

// Every learner works through all six, in this order. Each category has many courses.
export type Category = { name: string; about: string; kids: string[]; adults: string[] }

// DUMMY: example courses
export const categories: Category[] = [
  {
    name: 'Computer Foundations',
    about: 'Using a computer well and staying safe online.',
    kids: ['Typing and Files', 'Searching the Internet', 'Staying Safe Online'],
    adults: ['Technology from Zero', 'Email and Documents', 'Staying Safe Online'],
  },
  {
    name: 'AI and Data',
    about: 'How AI works, how to use it well, and making sense of data.',
    kids: ['Meet AI', 'Asking AI Good Questions', 'Charts and Data'],
    adults: ['AI Tools for Work', 'Spreadsheets and Data', 'Checking AI Answers'],
  },
  {
    name: 'Design and Digital Media',
    about: 'Drawing, animation, video, and how screens should look.',
    kids: ['Digital Drawing', 'Animation and Stories', 'Video Making'],
    adults: ['Graphics for Work', 'Slides that Work', 'Video Basics'],
  },
  {
    name: 'Software Engineering',
    about: 'Building working programs, games, websites and apps.',
    kids: ['Game Making with Scratch', 'Intro to Python', 'Build a Website'],
    adults: ['Python from Zero', 'Build a Website', 'Web Apps'],
  },
  {
    name: 'Hardware and Electronics',
    about: 'Circuits, sensors and robots.',
    kids: ['First Circuits', 'Robots', 'Microcontrollers'],
    adults: ['Electronics Basics', 'Microcontrollers', 'Smart Devices'],
  },
  {
    name: 'Automation',
    about: 'Getting computers to do repetitive work for you.',
    kids: ['Make the Computer Do It', 'Simple Bots', 'Automate with Python'],
    adults: ['Automate Your Spreadsheets', 'No-code Automation', 'Automate with Python'],
  },
]

// One module runs 4 months
export const moduleSteps = [
  { when: 'Month 1', what: 'Mini project' },
  { when: 'Month 2', what: 'Mini project' },
  { when: 'Month 3', what: 'Mini project' },
  { when: 'Month 4', what: 'End-of-module project' },
  { when: 'Showcase', what: 'Family and friends come to see it' },
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

export const beforeYouStart = [
  'A laptop or desktop with a keyboard and mouse. A phone is not enough.',
  'An internet connection.',
  'A short device check before the first class.',
  fees,
]

// Adults page

export const adultName = 'Atlas'
export const adultMeaning = {
  origin: 'Greek',
  means: 'The titan who holds up the sky.',
  why: 'Adults carry a lot: work, family, careers. We help you carry it with new skills.',
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
  { who: 'Career switchers', why: 'Take a first real step into tech.' },
  { who: 'Working professionals', why: 'Save time at work with the right tools.' },
]

export const adultNeed = [
  'A laptop or desktop and an internet connection.',
  'A short device check before your first class.',
  fees,
]
