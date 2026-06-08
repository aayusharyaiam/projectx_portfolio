import technika25Img from '../assets/projects/technika25.svg'
import technika24Img from '../assets/projects/technika24.svg'
import prakrida25Img from '../assets/projects/prakrida25.svg'
import ascombuildImg from '../assets/projects/ascombuild.svg'
import kenjalImg from '../assets/projects/kenjal.svg'
import bitpAiml1Img from '../assets/projects/bitp_aiml_1.svg'
import bitpAiml2Img from '../assets/projects/bitp_aiml_2.svg'
import instabotImg from '../assets/projects/instabot.svg'
import ieeeImg from '../assets/projects/ieee.svg'

export const projects = [
  {
    id: 9,
    title: 'IEEE SB BIT Patna',
    subtitle: 'Official Frontend Repository',
    description:
      'The official frontend for the IEEE Student Branch at BIT Patna. Overhauled to deliver a production-grade, premium user experience featuring 1:1 Premium UI Replication of Lumina IEEE and Cybernetic Ether design systems.',
    image: ieeeImg,
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'GSAP', 'React Router'],
    category: 'Web Platform',
    year: '2024',
    link: 'https://github.com/aayusharyaiam/IEEE-web',
    color: '#00629B',
    stats: {
      themes: 'Light/Dark',
      layouts: '100% Resp.',
      animations: 'GSAP',
    },
  },
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
  {
    id: 4,
    title: 'Ascombuild',
    subtitle: 'Construction Company Website',
    description:
      'A modern corporate website designed for Ascombuild construction company. Features an interactive project showcase, structural service catalogues, dynamic contact queries, and a fully custom isometric design system.',
    image: ascombuildImg,
    tags: ['React', 'GSAP', 'Vanilla CSS', 'Responsive Design'],
    category: 'Corporate Website',
    year: '2025',
    link: null,
    color: '#FFA000',
    stats: {
      projects: '50+',
      clients: '30+',
      views: '10k+',
    },
  },
  {
    id: 5,
    title: 'Kenjal',
    subtitle: 'Water Treatment Products E-commerce',
    description:
      'A digital storefront and corporate portal for Kenjal, a leading water treatment plant manufacturer. Offers seamless product catalog browsing, quote requests, filtration system specifications, and client onboarding.',
    image: kenjalImg,
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'E-commerce & Portal',
    year: '2026',
    link: null,
    color: '#00F2FE',
    stats: {
      products: '120+',
      orders: '1,500+',
      conversion: '4.2%',
    },
  },
  {
    id: 6,
    title: 'BITP AI/ML 2024',
    subtitle: '1st International Conference Platform',
    description:
      'The official web portal for the first international conference of BITP on Artificial Intelligence and Machine Learning. Supported paper submission workflows, peer review notifications, speaker registrations, and live presentation streams.',
    image: bitpAiml1Img,
    tags: ['React', 'Framer Motion', 'Node.js', 'Express', 'MySQL'],
    category: 'Conference Platform',
    year: '2024',
    link: null,
    color: '#F43F5E',
    stats: {
      attendees: '1,200+',
      papers: '350+',
      speakers: '45+',
    },
  },
  {
    id: 7,
    title: 'BITP AI/ML 2025',
    subtitle: '2nd International Conference Platform',
    description:
      'An upgraded version of the BITP conference platform featuring automated review assignments, intelligent session scheduling, multi-track virtual streaming, and improved accessibility features for researchers worldwide.',
    image: bitpAiml2Img,
    tags: ['Next.js', 'PostgreSQL', 'TailwindCSS', 'GraphQL', 'AWS'],
    category: 'Conference Platform',
    year: '2025',
    link: null,
    color: '#10B981',
    stats: {
      attendees: '2,100+',
      papers: '580+',
      speakers: '70+',
    },
  },
  {
    id: 8,
    title: 'InstaBot',
    subtitle: 'Instagram Engagement Automation',
    description:
      'A high-performance engagement automation system tailored for Instagram. Optimizes response rates, automates comments, manages direct messages based on keyword triggers, and increases organic follower reach safely.',
    image: instabotImg,
    tags: ['Python', 'Selenium', 'Node.js', 'Redis', 'Instagram API'],
    category: 'Automation Tool',
    year: '2026',
    link: null,
    color: '#F77737',
    stats: {
      messages: '500k+',
      hours: '80h/mo',
      growth: '24% avg',
    },
  },
]
