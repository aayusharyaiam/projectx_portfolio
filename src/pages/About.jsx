import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedSection from '../components/AnimatedSection'
import StatsCounter from '../components/StatsCounter'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Founded by a group of passionate developers with a shared vision — to build digital products that actually matter. Started with small freelance projects and local hackathons.',
    highlights: ['First client project', 'Team of 2', 'Local hackathon wins'],
  },
  {
    year: '2024',
    title: 'Building Momentum',
    description: 'Shipped Technika 2k24, our first large-scale festival platform. Expanded the team and refined our development process. Begun establishing our reputation in the startup ecosystem.',
    highlights: ['Technika 2k24 launch', 'Team grew to 3', '5+ projects delivered'],
  },
  {
    year: '2025',
    title: 'Scaling Up',
    description: 'Launched Technika 2k25 and Prakrida 2k25 platforms serving thousands. Evolved into a full-service digital studio with a focus on performance and premium aesthetics.',
    highlights: ['Technika 2k25 & Prakrida 2k25', '10,000+ users served', 'Premium studio identity'],
  },
]

const impactStats = [
  { label: 'Projects Shipped', value: 15, suffix: '+', trend: 'Since 2023' },
  { label: 'Users Served', value: 10, suffix: 'K+', trend: 'Across platforms' },
  { label: 'Lines of Code', value: 500, suffix: 'K+', trend: 'And counting' },
  { label: 'Client Retention', value: 100, suffix: '%', trend: 'Repeat clients' },
]

export default function About() {
  const timelineRef = useRef(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const items = timelineRef.current.querySelectorAll('.timeline-item')
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-display mb-6 leading-tight">
              We build with <span className="gradient-text">purpose</span>
            </h1>
            <p className="text-lg text-surface-400 leading-relaxed">
              A developer-led studio on a mission to craft digital experiences that are fast,
              beautiful, and built to last. We believe great software is the intersection of
              engineering rigor and creative vision.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection>
          <div className="glass-card glow-border rounded-3xl p-10 lg:p-16 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white font-display mb-6">Our Mission</h2>
                <p className="text-surface-300 leading-relaxed mb-4">
                  To empower ambitious teams with premium digital solutions. We're not just building
                  websites — we're engineering platforms that drive growth, delight users, and stand
                  the test of scale.
                </p>
                <p className="text-surface-400 leading-relaxed">
                  Every line of code we write is backed by a commitment to performance, accessibility,
                  and pixel-perfect design. We care about the craft as much as the outcome.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'speed', label: 'Performance First' },
                  { icon: 'brush', label: 'Design-Driven' },
                  { icon: 'code', label: 'Clean Code' },
                  { icon: 'group', label: 'Team-Oriented' },
                ].map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl text-center group hover:bg-card-hover transition-all">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3 block group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <p className="text-sm font-bold text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Impact Metrics */}
        <AnimatedSection className="mb-24">
          <h2 className="text-3xl font-bold text-white font-display mb-12 text-center">Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactStats.map((stat, i) => (
              <StatsCounter key={i} {...stat} />
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-white font-display mb-16 text-center">Our Journey</h2>
        </AnimatedSection>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:-translate-x-px" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`timeline-item relative flex flex-col lg:flex-row gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-8 z-10 shadow-lg shadow-primary/30" />

              {/* Content */}
              <div className={`pl-16 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                <span className="text-6xl font-black text-surface-800/50 font-display block mb-2">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mb-3">{item.title}</h3>
                <p className="text-surface-400 leading-relaxed mb-4">{item.description}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                  {item.highlights.map((h, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
