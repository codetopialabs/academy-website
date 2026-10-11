// All site content lives here. Items marked DUMMY are placeholders until the team confirms them.

export const startDate = 'Saturday 7 November'

// DUMMY: Google Form link from Barbara
export const registerUrl = '#register'
// DUMMY: label may become 'Book a free taster'
export const registerLabel = 'Register'

export const email = 'codetopiaacademy@gmail.com'
// DUMMY: WhatsApp number in international format, no plus sign
export const whatsapp = '233000000000'

export type Course = { name: string; about: string; make: string }
export type Group = {
  id: string
  name: string
  ages: string
  about: string
  open: boolean
  courses: Course[]
}

// DUMMY: courses and which groups open on 7 Nov
export const childGroups: Group[] = [
  {
    id: 'builders',
    name: 'Builders',
    ages: '9 to 12',
    about: 'First real steps in coding, through games and animation.',
    open: true,
    courses: [
      { name: 'Game Making with Scratch', about: 'Loops, controls, scores and collisions.', make: 'A game you can play' },
      { name: 'Animation and Stories', about: 'Scenes, timing and characters that talk.', make: 'A short animated film' },
      { name: 'Intro to Python', about: 'Your first lines of real code.', make: 'A small text game' },
    ],
  },
  {
    id: 'explorers',
    name: 'Explorers',
    ages: '6 to 8',
    about: 'Logic and computer basics through play.',
    open: false,
    courses: [
      { name: 'Computer Basics', about: 'Using a mouse, typing and saving work.', make: 'A typed and saved story' },
      { name: 'Logic Puzzles', about: 'Solving puzzles one step at a time.', make: 'A puzzle for a friend to solve' },
      { name: 'First Animations', about: 'Moving characters in Scratch.', make: 'An animated story' },
    ],
  },
  {
    id: 'makers',
    name: 'Makers',
    ages: '13 to 16',
    about: 'Real programming and real projects.',
    open: false,
    courses: [
      { name: 'Python Foundations', about: 'Variables, logic and functions.', make: 'A quiz or a simple tool' },
      { name: 'Build a Website', about: 'HTML, CSS and putting it online.', make: 'Your own live website' },
      { name: 'AI Projects', about: 'How AI works and how to use it well.', make: 'A small project that uses AI' },
    ],
  },
]

export const adultGroup: Group = {
  id: 'adults',
  name: 'Adults',
  ages: '17+',
  about: 'Practical tech skills for work. Evening classes. Projects for your portfolio.',
  open: false,
  courses: [
    { name: 'Technology from Zero', about: 'Computers, the internet and AI for complete beginners.', make: 'Everyday tasks done with confidence' },
    { name: 'Tech for Work', about: 'Spreadsheets, automation and AI tools.', make: 'A tool that saves you time at work' },
    { name: 'Build a Website', about: 'From a blank page to a live site.', make: 'Your first portfolio site' },
  ],
}

export const howItWorks = [
  { title: '5 per tutor', text: 'Small live classes, cameras on. Every learner gets help.' },
  { title: '4 sessions a month', text: 'One session a week. Everyone starts at Level 1.' },
  { title: 'A project every month', text: 'Each month ends with a mini project you built yourself.' },
  { title: 'A capstone every term', text: 'Each 4-month term ends with a bigger project.' },
  // DUMMY: confirm showcase is monthly
  { title: 'A showcase', text: 'Children show their work to parents. Adults show it to the class.' },
]

// DUMMY: real tutors, photos and lines
export const tutors = [
  { name: 'Tutor name', role: 'Builders tutor', line: 'One line about who they are.' },
  { name: 'Tutor name', role: 'Builders tutor', line: 'One line about who they are.' },
  { name: 'Tutor name', role: 'Adults tutor', line: 'One line about who they are.' },
]

export const forParents = [
  'You get a short progress note every month.',
  'Tutors never contact children privately. Everything goes through you.',
  'Every session is recorded, and you are told so.',
  "We never use your child's photo or name without your written consent.",
]

export const whatYouNeed = [
  'A laptop or desktop with a keyboard and mouse. A phone is not enough.',
  'An internet connection.',
  'A short device check before your first class.',
]

export const fees = 'Fees are shared after you register.'
