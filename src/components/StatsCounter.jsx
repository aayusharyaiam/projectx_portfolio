import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StatsCounter({ value, suffix = '', prefix = '', decimals = 0, label, trend }) {
  const countRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const numberRef = useRef({ val: 0 })

  useEffect(() => {
    const el = countRef.current
    if (!el || hasAnimated) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        setHasAnimated(true)
        gsap.to(numberRef.current, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (countRef.current) {
              const current = numberRef.current.val
              countRef.current.querySelector('.counter-value').textContent =
                prefix + (decimals > 0 ? current.toFixed(decimals) : Math.floor(current)) + suffix
            }
          },
        })
      },
    })

    return () => trigger.kill()
  }, [value, suffix, prefix, decimals, hasAnimated])

  return (
    <div ref={countRef} className="glass-card glow-border p-8 rounded-2xl">
      <p className="text-surface-400 text-sm font-medium mb-1">{label}</p>
      <p className="counter-value text-3xl font-bold text-white font-display tracking-tight">
        {prefix}0{suffix}
      </p>
      {trend && (
        <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold">
          <span className="material-symbols-outlined text-xs">trending_up</span>
          {trend}
        </p>
      )}
    </div>
  )
}
