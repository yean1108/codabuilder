import React from 'react'

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={(e) => handleScroll(e, '#hero')}>CodaBuilder</div>
        <nav className="nav">
          <a href="#portfolio" className="nav-link" onClick={(e) => handleScroll(e, '#portfolio')}>Work</a>
          <a href="#about" className="nav-link" onClick={(e) => handleScroll(e, '#about')}>About</a>
          <a href="#process" className="nav-link" onClick={(e) => handleScroll(e, '#process')}>Process</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
