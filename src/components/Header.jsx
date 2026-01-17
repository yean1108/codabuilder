import React, { useState, useEffect } from 'react'
import { developmentProjects } from './Development'

const Header = ({ onProjectClick }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isProjectPage, setIsProjectPage] = useState(false)

  // 检测是否在项目详情页
  useEffect(() => {
    const checkProjectPage = () => {
      const hash = window.location.hash.replace('#', '')
      setIsProjectPage(hash.startsWith('development/'))
    }
    
    checkProjectPage()
    window.addEventListener('hashchange', checkProjectPage)
    return () => window.removeEventListener('hashchange', checkProjectPage)
  }, [])

  const handleNavClick = (e, targetId, pageHash) => {
    e.preventDefault()
    
    // 如果指定了页面hash，直接导航到该页面
    if (pageHash) {
      window.location.hash = pageHash
      return
    }
    
    // 如果在项目详情页或其他页面，先返回首页
    if (isProjectPage || window.location.hash !== '') {
      window.location.hash = ''
      // 等待页面切换后再滚动
      setTimeout(() => {
        const target = document.querySelector(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 150)
    } else {
      // 在首页直接滚动
      const target = document.querySelector(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (window.location.hash) {
      window.location.hash = ''
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleProjectClick = (e, project) => {
    e.preventDefault()
    setShowDropdown(false)
    onProjectClick(project)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={handleLogoClick}>CodaBuilder</div>
        <nav className="nav">
          <a 
            href="#home" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Home
          </a>
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a 
              href="#development" 
              className="nav-link"
            >
              Development
            </a>
            {showDropdown && (
              <div className="dropdown-menu">
                {developmentProjects.map(project => (
                  <a
                    key={project.id}
                    href={`#development/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-item"
                    onClick={(e) => handleProjectClick(e, project)}
                  >
                    {project.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a 
            href="#construction" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, null, 'construction')}
          >
            Construction
          </a>
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, null, 'about')}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, null, 'contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
