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

export type Course = { name: string; about: string; make: string }
export type Shape = 'circle' | 'square' | 'triangle' | 'diamond'
export type Group = {
  id: string
  name: string
  ages: string
  about: string
  open: boolean
  shape: Shape
  color: string // shape fill
  tint: string // panel background
  courses: Course[]
}

// DUMMY: courses and which groups open on 7 Nov
export const groups: Group[] = [
  {
    id: 'orion',
    name: 'Orion',
    ages: '9 to 11',
    about: 'First real steps in coding, through games and animation.',
    open: true,
    shape: 'square',
    color: 'fill-sky-300',
    tint: 'bg-sky-50',
    courses: [
      { name: 'Game Making with Scratch', about: 'Loops, controls, scores and collisions.', make: 'A game they can play' },
      { name: 'Animation and Stories', about: 'Scenes, timing and characters that talk.', make: 'A short animated film' },
      { name: 'Intro to Python', about: 'Their first lines of real code.', make: 'A small text game' },
    ],
  },
  {
    id: 'nova',
    name: 'Nova',
    ages: '6 to 8',
    about: 'Logic and computer basics through play.',
    open: false,
    shape: 'circle',
    color: 'fill-yellow-300',
    tint: 'bg-yellow-50',
    courses: [
      { name: 'Computer Basics', about: 'Using a mouse, typing and saving work.', make: 'A typed and saved story' },
      { name: 'Logic Puzzles', about: 'Solving puzzles one step at a time.', make: 'A puzzle for a friend to solve' },
      { name: 'First Animations', about: 'Moving characters in Scratch.', make: 'An animated story' },
    ],
  },
  {
    id: 'nyota',
    name: 'Nyota',
    ages: '12 to 15',
    about: 'Real programming and real projects.',
    open: false,
    shape: 'triangle',
    color: 'fill-emerald-300',
    tint: 'bg-emerald-50',
    courses: [
      { name: 'Python Foundations', about: 'Variables, logic and functions.', make: 'A quiz or a simple tool' },
      { name: 'Build a Website', about: 'HTML, CSS and putting it online.', make: 'Their own live website' },
      { name: 'AI Projects', about: 'How AI works and how to use it well.', make: 'A small project that uses AI' },
    ],
  },
  {
    id: 'zenith',
    name: 'Zenith',
    ages: '16 to 20',
    about: 'Bigger projects, and skills for university and first jobs.',
    open: false,
    shape: 'diamond',
    color: 'fill-orange-300',
    tint: 'bg-orange-50',
    courses: [
      { name: 'Web Apps', about: 'Building apps people can sign in to and use.', make: 'A working web app' },
      { name: 'Data and AI', about: 'Working with data and putting AI to use.', make: 'A project that answers a real question' },
      { name: 'Portfolio Project', about: 'One big project, planned and built by them.', make: 'A portfolio piece to show universities and employers' },
    ],
  },
]

export const month = [
  { when: 'Week 1', what: 'Learn a new idea and start building' },
  { when: 'Week 2', what: 'Add to it' },
  { when: 'Week 3', what: 'Test, fix and improve' },
  { when: 'Week 4', what: 'Finish the mini project' },
  // DUMMY: confirm showcase is monthly
  { when: 'Showcase', what: 'Show it to parents' },
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
export const adultAges = '21+'

// DUMMY: adult start date, null means opening soon
export const adultStart: string | null = null

// DUMMY: adult courses
export const adultCourses: Course[] = [
  { name: 'Technology from Zero', about: 'Computers, the internet and AI for complete beginners.', make: 'Confidence with everyday tech tasks' },
  { name: 'Tech for Work', about: 'Spreadsheets, automation and AI tools.', make: 'A tool that saves you time at work' },
  { name: 'Build a Website', about: 'From a blank page to a live site.', make: 'Your first portfolio site' },
]

export const adultHow = [
  'Live evening classes online.',
  'About 5 people per tutor.',
  '4 sessions a month.',
  'A project at the end of every month.',
  'A bigger portfolio project at the end of every 4-month term.',
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
