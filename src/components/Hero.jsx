import React from 'react'

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-title">Building<br />Excellence</h1>
        <p className="hero-subtitle">Quality construction projects across Australia</p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn btn-primary" onClick={(e) => handleScroll(e, '#portfolio')}>
            View Our Work
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => handleScroll(e, '#contact')}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
