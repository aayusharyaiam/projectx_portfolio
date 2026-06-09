import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '../components/SplitText'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { services, processSteps, testimonials } from '../data/services'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const parallaxRef = useRef(null)

  useEffect(() => {
    // Parallax background glow
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Hero subtitle + buttons fade in
    const heroElements = heroRef.current?.querySelectorAll('.hero-fade')
    if (heroElements) {
      gsap.fromTo(
        heroElements,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 1, ease: 'power3.out' }
      )
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <main className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Parallax background elements */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Now accepting projects for 2025
                </span>
              </div>

              {/* Split Text Hero */}
              <SplitText
                text="Building Digital Products That Actually Matter"
                className="text-5xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white font-display text-center"
                highlightWords={['Actually', 'Matter']}
              />

              <p className="hero-fade text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed">
                We partner with ambitious startups to design and engineer world-class digital
                experiences with a focus on performance, precision, and scalability.
              </p>

              <div className="hero-fade flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg glow-hover"
                >
                  Start a project
                </Link>
                <Link
                  to="/work"
                  className="bg-surface-800/50 text-surface-200 border border-surface-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-800 transition-all"
                >
                  View our work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-surface-900/20" id="work">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-white font-display mb-4">Featured Work</h2>
                <p className="text-surface-400 text-lg">
                  A selection of projects where design meets technical precision.
                </p>
              </div>
              <Link
                to="/work"
                className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all shrink-0"
              >
                View all projects
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects
              .filter(p => ['IEEE SB BIT Patna', 'Technika 2k25', 'Prakrida 2k25', 'IMPACT 2025'].includes(p.title))
              .map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-white font-display mb-6">Expertise built for the future</h2>
            <p className="text-surface-400 text-lg">
              We don't just write code. We architect solutions that scale with your ambitions.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-800 border border-surface-800 rounded-3xl overflow-hidden">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-background p-10 md:p-12 hover:bg-surface-900/50 transition-colors group"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-surface-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface-900/20 border-y border-surface-800/50" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white font-display mb-16 text-center">How we ship</h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid md:grid-cols-4 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-surface-600 absolute -top-10 -left-4 select-none font-display">
                  {step.number}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 font-display">{step.title}</h3>
                  <p className="text-surface-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white font-display mb-16 text-center">
              What our partners say
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card glow-border p-10 rounded-3xl relative">
                <span className="material-symbols-outlined text-primary text-5xl absolute -top-5 left-10 bg-background px-1">
                  format_quote
                </span>
                <p className="text-lg text-surface-300 italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-surface-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-24">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden p-12 lg:p-24 text-center border border-surface-800 bg-card shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white font-display text-balance">
                Ready to build the future?
              </h2>
              <p className="text-xl text-surface-400 max-w-2xl leading-relaxed">
                We're currently booking for 2025. Let's discuss how we can bring your next big idea to
                life with technical excellence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <Link
                  to="/contact"
                  className="bg-gradient-primary text-white px-10 py-5 rounded-2xl font-bold text-xl glow-hover"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  to="/contact"
                  className="bg-surface-800/50 text-surface-200 border border-surface-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-surface-800 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
