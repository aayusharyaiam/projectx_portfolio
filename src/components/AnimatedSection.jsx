import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({ children, className = '', delay = 0, stagger = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? el.children : el

    gsap.fromTo(
      targets,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
