import technika25Img from '../assets/projects/technika25.svg'
import technika24Img from '../assets/projects/technika24.svg'
import prakrida25Img from '../assets/projects/prakrida25.svg'

export const projects = [
  {
    id: 1,
    title: 'Technika 2k25',
    subtitle: 'Annual Technical Festival Platform',
    description:
      'A cutting-edge web platform built for the annual technical festival Technika 2k25. Features interactive event schedules, real-time registration, and immersive 3D landing experiences with micro-interactions that captivate thousands of participants.',
    image: technika25Img,
    tags: ['React', 'GSAP', 'Three.js', 'Node.js', 'MongoDB'],
    category: 'Web Platform',
    year: '2025',
    link: 'https://technikna-2-k25.vercel.app/',
    color: '#7C5CFF',
    stats: {
      users: '5,000+',
      events: '50+',
      registrations: '3,200+',
    },
  },
  {
    id: 2,
    title: 'Technika 2k24',
    subtitle: 'Technical Festival Platform',
    description:
      'The predecessor platform for the Technika technical festival. Designed with a bold visual identity, animated sections, and seamless event management features that set the benchmark for future iterations.',
    image: technika24Img,
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Firebase'],
    category: 'Web Platform',
    year: '2024',
    link: null,
    color: '#A17CFF',
    stats: {
      users: '3,800+',
      events: '40+',
      registrations: '2,500+',
    },
  },
  {
    id: 3,
    title: 'Prakrida 2k25',
    subtitle: 'Sports Festival Platform',
    description:
      'A high-performance web platform for the Prakrida sports festival featuring live score tracking, team registrations, dynamic scheduling, and blazing-fast page loads optimized for mobile-first experiences.',
    image: prakrida25Img,
    tags: ['React', 'TailwindCSS', 'GSAP', 'Express', 'PostgreSQL'],
    category: 'Web Platform',
    year: '2025',
    link: 'https://prakrida.in/',
    color: '#5CE1FF',
    stats: {
      participants: '4,200+',
      sports: '25+',
      matches: '150+',
    },
  },
]
