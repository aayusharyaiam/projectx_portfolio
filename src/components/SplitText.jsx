import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SplitText({ text, className = '', highlightWords = [] }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const spans = el.querySelectorAll('.split-char')
    gsap.fromTo(
      spans,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.3,
      }
    )
  }, [text])

  const words = text.split(' ')

  return (
    <h1 ref={containerRef} className={`${className} overflow-hidden`} style={{ perspective: '1000px' }}>
      {words.map((word, wi) => {
        const isHighlight = highlightWords.includes(word)
        return (
          <span key={wi} className="inline-block mr-[0.3em]">
            {word.split('').map((char, ci) => (
              <span
                key={ci}
                className={`split-char inline-block ${isHighlight ? 'gradient-text' : ''}`}
                style={{ willChange: 'transform, opacity' }}
              >
                {char}
              </span>
            ))}
          </span>
        )
      })}
    </h1>
  )
}
