export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & DB',
    items: ['Java', 'Node.js', 'Firebase', 'MySQL', 'SQL'],
  },
  {
    category: 'Design & Tools',
    items: ['Figma', 'UI/UX Design', 'Wireframing', 'Looker Studio', 'Git', 'VS Code'],
  },
  {
    category: 'Networking',
    items: ['CCNA Fundamentals', 'IoT', 'Cloud (AWS)'],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website v2',
    desc: 'Personal portfolio with admin CMS powered by Firebase Firestore and Storage, featuring dynamic achievement management, dark mode, and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    year: '2025',
    link: '',
    color: '#C8963E',
  },
  {
    id: 2,
    title: 'Goes to School #7 — IoT Website',
    desc: 'Landing page for the Goes to School #7 event about Future Technology with IoT, built to inform and register participants.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2025',
    link: '',
    color: '#4A7C59',
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    desc: 'Interactive data dashboard built with Looker Data Studio for visual reporting and analytics, integrating live data sources.',
    tags: ['Looker Studio', 'Data Viz', 'Analytics'],
    year: '2025',
    link: '',
    color: '#6B7DB3',
  },
  {
    id: 4,
    title: 'K3 Poster Design — 2nd Place',
    desc: 'Award-winning infographic poster on Occupational Health and Safety (K3), winning 2nd place in a national poster competition.',
    tags: ['Graphic Design', 'Figma', 'Typography'],
    year: '2025',
    link: '',
    color: '#B35E5E',
  },
]

export const ACHIEVEMENTS_STATIC = [
  {
    id: 1,
    title: 'Pembicara Pelatihan HTML & CSS',
    org: 'Universitas Negeri Yogyakarta',
    date: 'November 2025',
    category: 'achievement',
  },
  {
    id: 2,
    title: 'Juara 2 Lomba Desain Poster K3',
    org: 'STIKES Mitra Husada Karanganyar',
    date: 'February 2025',
    category: 'competition',
  },
  {
    id: 3,
    title: 'CCNA: Introduction to Networks',
    org: 'Cisco Networking Academy',
    date: 'December 2024',
    category: 'bootcamp',
  },
  {
    id: 4,
    title: 'Belajar Dasar Pemrograman JavaScript',
    org: 'Dicoding Indonesia',
    date: 'May 2025',
    category: 'bootcamp',
  },
  {
    id: 5,
    title: 'Panitia UNIFEST 2025 — Sie PDD',
    org: 'Universitas Teknologi Digital Indonesia',
    date: 'Juli 2025',
    category: 'organization',
  },
  {
    id: 6,
    title: 'Participant 4C National Competition',
    org: 'Universitas Brawijaya',
    date: 'December 2024',
    category: 'competition',
  },
]

export const CATEGORY_COLORS = {
  achievement: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
  competition: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-700 dark:text-rose-400' },
  bootcamp: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400' },
  organization: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400' },
  'webinar and seminar': { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-400' },
  intern: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-400' },
}