// All site content lives here. Items marked DUMMY are placeholders until the team confirms them.

// Next start date: set it in schedule.ts
export { classStarted, startDate, startLine } from './schedule'

// Registration Google Form
export const registerUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf2AqEnWfDAmVChqHUDUSAhKUZ0rXuhQROCQbTTSXbPVhqyOg/viewform'
// DUMMY: label may become 'Book a free taster'
export const registerLabel = 'Register'

// true: a thin note at the top of every page says the site is still being built
export const underDevelopment = false

// false: Register buttons show a 'registration opens soon' note instead of going to the form
export const registrationOpen = true
export const registrationSoon = "Registration opens soon. Message us on WhatsApp and we'll keep you posted."

export const email = 'codetopiaacademy@gmail.com'
// WhatsApp number in international format, no plus sign (+233 53 264 6232)
export const whatsapp = '233532646232'

export const fees = 'Fees are shared after you register.'

export const priceAmount = 'GHS 500'
export const pricePer = 'a month'

// Discounts. DUMMY: confirm wording with the team
export type Discount = { amount: string; title: string; about: string; tint: string }

export const saveTitle = 'Better together'
export const deal = '50% OFF'
export const saveLink = 'for families and friends'
export const adultSaveLink = 'when you bring a friend'

// Bar at the top of every page, above the header, after a 50% OFF badge. short: phones
export const promo = {
  kids: { text: 'your third child, and your next month when a friend joins.', short: 'for families and friends.' },
  adults: { text: 'your next month when you bring a friend.', short: 'when you bring a friend.' },
}

export const siblingDiscount: Discount = {
  amount: '50% off',
  title: 'your third child',
  about:
    'Learning is more fun with brothers and sisters. When three of your children join, your third gets 50% off every month, for as long as they all learn with us.',
  tint: 'bg-sky-100',
}

export const referralDiscount: Discount = {
  amount: '50% off',
  title: 'your next month',
  about:
    "Know someone who would love it here? Invite them along. Once they join, you get 50% off your next month, and every friend who joins earns you another 50% off. Just ask them to mention your name when they register.",
  tint: 'bg-yellow-100',
}

export type Shape = 'circle' | 'square' | 'triangle' | 'diamond' | 'hexagon'
// say: easy written pronunciation
export type Meaning = { origin: string; means: string; why: string; say: string }
export type Group = {
  id: string
  name: string
  meaning: Meaning
  ages: string
  about: string
  min: number
  max: number
  level: number // intensity, 1 to 4
  pace: string
  shape: Shape
  color: string // shape fill
  tint: string // panel background
  accent: string // solid background for highlights
}

export const groups: Group[] = [
  {
    id: 'nova',
    name: 'Nova',
    meaning: {
      say: 'NOH-vuh',
      origin: 'Latin',
      means: 'A new star that suddenly lights up.',
      why: 'A new star is just starting to shine. Ages 6 to 8 are where every learner first lights up.',
    },
    ages: '6 to 8',
    about: 'Logic and computer basics through play.',
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
      origin: 'Greek',
      means: 'One of the brightest groups of stars in the sky.',
      why: 'Orion is easy to spot because it shines so brightly. Ages 9 to 11 is when learners stand out more with their projects.',
    },
    ages: '9 to 11',
    about: 'First steps in coding, through games and animation.',
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
      origin: 'Swahili',
      means: 'Star.',
      why: 'A star gives off its own light. Ages 12 to 15 shine on their own, with their own code and projects.',
    },
    ages: '12 to 15',
    about: 'Proper programming and bigger projects.',
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
      origin: 'Arabic, via Latin',
      means: 'The highest point in the sky.',
      why: 'Nothing sits higher in the sky. Ages 16 to 20 are our top group, getting ready for university and work.',
    },
    ages: '16 to 20',
    about: 'Bigger projects, and skills for university and first jobs.',
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
export type Category = { id: CategoryId; name: string; about: string; feel: string; adultFeel: string; tint: string }

// DUMMY: example courses
export const categories: Category[] = [
  {
    id: 'foundations',
    name: 'Computer Foundations',
    about: 'Using a computer well and staying safe online.',
    feel: "Type, save, search, and stay safe online.",
    adultFeel: "Get confident with computers, files, email and staying safe online.",
    tint: 'bg-yellow-100',
  },
  {
    id: 'ai',
    name: 'AI and Data',
    about: 'How AI works, how to use it well, and making sense of data.',
    feel: "Ask AI good questions, and know when it's wrong.",
    adultFeel: "Use AI tools well at work, and know when their answers are wrong.",
    tint: 'bg-sky-100',
  },
  {
    id: 'design',
    name: 'Design and Digital Media',
    about: 'Drawing, animation, video, and how screens should look.',
    feel: "Draw, animate and make their own videos.",
    adultFeel: "Make clean slides, graphics and short videos.",
    tint: 'bg-rose-100',
  },
  {
    id: 'software',
    name: 'Software Engineering',
    about: 'Building working programs, games, websites and apps.',
    feel: "Build games, websites and apps that really work.",
    adultFeel: "Build websites and simple apps, and start a portfolio.",
    tint: 'bg-emerald-100',
  },
  {
    id: 'hardware',
    name: 'Hardware and Electronics',
    about: 'Circuits, sensors and robots.',
    feel: "Make lights blink and robots move.",
    adultFeel: "Understand the devices you use and build simple smart gadgets.",
    tint: 'bg-orange-100',
  },
  {
    id: 'automation',
    name: 'Automation',
    about: 'Getting computers to do repetitive work for you.',
    feel: "Get the computer to do the boring bits.",
    adultFeel: "Get the computer to do the repetitive parts of your job.",
    tint: 'bg-lime-100',
  },
]

// DUMMY: confirm answers with the team
export const faq = [
  { q: 'My child has never used a computer much. Is that okay?', a: 'Yes. Everyone starts at the beginning, and there is a short device check before the first class.' },
  { q: 'What happens as my child gets older?', a: 'They move up to the next group. The six areas stay the same, but the courses go deeper.' },
  { q: 'How will I know how my child is doing?', a: 'You get a short progress note every month.' },
  { q: 'Do they get a certificate?', a: 'Yes. At the end of every 4-month module, each learner gets a certificate for what they learned and built.' },
  { q: 'What is the showcase?', a: 'At the end of each 4-month module, learners present their project. Family and friends are invited.' },
  { q: 'What do we need at home?', a: 'A laptop, desktop or tablet, and an internet connection. A phone is not enough.' },
]

// Tutors. socials: add only the ones a tutor wants shown
export type Tutor = {
  name: string
  photo?: string
  bio?: string
  socials?: { linkedin?: string; x?: string; instagram?: string; github?: string; portal?: string; website?: string }
}

export const tutors: Tutor[] = [
  {
    name: 'Barbara Asiamah',
    photo: '/tutors/barbara-asiamah.jpg',
    bio: "Barbara is a project manager, data analyst and Python teacher in Ghana. For over 6 years she has built and run beginner tech programmes, especially for women and young people. She has organised and mentored at community events like Django Girls Koforidua, and teaches Python, web development and data skills in workshops. She wants everyone to feel that tech is for them.",
    socials: { linkedin: 'https://www.linkedin.com/in/barbara-asiamah', x: 'https://x.com/BarbaraAsiamah5', github: 'https://github.com/barbara99', instagram: 'https://www.instagram.com/barbara_asiamah/' },
  },
  {
    name: 'Juliet Asiedu',
    photo: '/tutors/juliet-asiedu.jpg',
    bio: 'Juliet is a registered midwife who loves tech. She cares about technology, healthcare and making a difference in her community. As a Community Manager at Codetopia Community, she helps the community grow by bringing people together to learn and build.',
    socials: {
      linkedin: 'https://linkedin.com/in/julietasiedu',
      x: 'https://x.com/ama_jollof',
      github: 'https://github.com/AJ-254',
      instagram: 'https://instagram.com/ama_jollof',
      portal: 'https://portal.community.codetopia.org/@juliet',
    },
  },
  {
    name: 'Larry Tetteh Quao',
    photo: '/tutors/larry-tetteh-quao.jpg',
    bio: 'Larry is a UI/UX designer and frontend developer from Ghana. He designs and builds websites and apps that are easy and enjoyable to use, taking ideas from first sketch to working product. As Director of Mentorship at Codetopia, he helps new developers grow by learning together and building real things.',
    socials: { linkedin: 'https://www.linkedin.com/in/lawrence-quao-0579912b2', x: 'https://x.com/quaoLarry', github: 'https://github.com/larryQuao' },
  },
]

export const forParents = [
  'Tutors never contact children privately. Everything goes through you.',
  'Every session is recorded, and you are told so.',
  "We never use your child's photo or name without your written consent.",
]

// Adults page

export const adultName = 'Atlas'
export const adultMeaning = {
  say: 'AT-lus',
  origin: 'Greek',
  means: 'The titan who holds up the sky.',
  why: 'Adults carry a lot, from work to family. Our adult classes give you skills that make the load lighter.',
}
export const adultAges = '21+'


export const adultPriceAmount = 'GHS 750'

// DUMMY: confirm answers with the team
export const adultFaq = [
  { q: "I've never coded. Is that okay?", a: 'Yes. Everyone starts at the beginning and goes at a pace that suits them.' },
  { q: 'When are the classes?', a: 'Twice a week. Choose evenings or weekends, whichever fits your schedule.' },
  { q: 'Can I have more or fewer lessons?', a: 'Yes. We can add or reduce lessons to fit around your work and life.' },
  { q: 'What will I have at the end?', a: 'A project every month, and a bigger one every four months for your portfolio. You present it at our showcase.' },
  { q: 'Do I get a certificate?', a: 'Yes. At the end of every 4-month module, you get a certificate for what you learned and built.' },
  { q: 'What do I need?', a: 'A laptop, desktop or tablet, and an internet connection. There is a short device check before your first class.' },
]

export const adultWho = [
  { who: 'Beginners', why: 'Get comfortable with computers, the internet and AI.' },
  { who: 'Students', why: 'Build skills and projects school does not cover.' },
  { who: 'Career switchers', why: 'Take a first step into tech.' },
  { who: 'Working professionals', why: 'Save time at work with the right tools.' },
]

