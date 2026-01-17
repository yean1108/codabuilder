import React, { useState, useEffect, useRef } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0])
  const statsRef = useRef(null)

  const stats = [
    { target: 150, suffix: "+", label: "Projects Completed" },
    { target: 25, suffix: "+", label: "Years Experience" },
    { target: 98, suffix: "%", label: "Client Satisfaction" },
    { target: 50, suffix: "+", label: "Awards Won" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2秒动画
    const startTime = Date.now()
    const timers = []

    stats.forEach((stat, index) => {
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // 使用easeOutCubic缓动函数
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.floor(stat.target * easeOutCubic)

        setAnimatedValues((prev) => {
          const newValues = [...prev]
          newValues[index] = currentValue
          return newValues
        })

        if (progress >= 1) {
          clearInterval(timer)
        }
      }, 16) // 约60fps

      timers.push(timer)
    })

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [isVisible])

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {animatedValues[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
