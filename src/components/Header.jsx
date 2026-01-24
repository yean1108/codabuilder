import React, { useState, useEffect } from 'react'
import { developmentProjects } from './Development'

const Header = ({ onProjectClick }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showDevelopment, setShowDevelopment] = useState(false)
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

  const closeMenu = () => {
    setShowMenu(false)
    setShowDevelopment(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    if (showMenu) {
      closeMenu()
    } else {
      setShowMenu(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleProjectClick = (e, project) => {
    e.preventDefault()
    closeMenu()
    onProjectClick(project)
  }

  const handleMenuLinkClick = (e, targetId, pageHash) => {
    e.preventDefault()
    closeMenu()
    // 延迟执行导航，确保菜单关闭动画完成
    setTimeout(() => {
      handleNavClick(e, targetId, pageHash)
    }, 100)
  }

  useEffect(() => {
    // 监听菜单状态变化，确保关闭时恢复滚动
    if (!showMenu) {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showMenu])

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo" onClick={handleLogoClick}>CodaBuilder</div>
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`menu-icon ${showMenu ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      {/* 全屏菜单 */}
      <div className={`fullscreen-menu ${showMenu ? 'active' : ''}`}>
        <div className="menu-backdrop" onClick={closeMenu}></div>
        <div className="menu-content">
          <div className="menu-header">
            <div className="logo menu-logo" onClick={handleLogoClick}>CodaBuilder</div>
            <button className="menu-close" onClick={closeMenu} aria-label="Close menu">
              <span></span>
              <span></span>
            </button>
          </div>
          
          <nav className="menu-nav">
            <a 
              href="#home" 
              className="menu-item"
              onClick={(e) => handleMenuLinkClick(e, '#hero')}
            >
              <span className="menu-item-number">01</span>
              <span className="menu-item-text">Home</span>
            </a>
            
            <div className="menu-item-group">
              <button 
                className="menu-item menu-item-parent"
                onClick={() => setShowDevelopment(!showDevelopment)}
              >
                <span className="menu-item-number">02</span>
                <span className="menu-item-text">Development</span>
                <span className={`menu-item-arrow ${showDevelopment ? 'active' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className={`menu-submenu ${showDevelopment ? 'active' : ''}`}>
                {developmentProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={`#development/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="menu-subitem"
                    onClick={(e) => handleProjectClick(e, project)}
                  >
                    <span className="menu-subitem-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="menu-subitem-text">{project.title}</span>
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="#construction" 
              className="menu-item"
              onClick={(e) => handleMenuLinkClick(e, null, 'construction')}
            >
              <span className="menu-item-number">03</span>
              <span className="menu-item-text">Construction</span>
            </a>
            
            <a 
              href="#about" 
              className="menu-item"
              onClick={(e) => handleMenuLinkClick(e, null, 'about')}
            >
              <span className="menu-item-number">04</span>
              <span className="menu-item-text">About</span>
            </a>
            
            <a 
              href="#contact" 
              className="menu-item"
              onClick={(e) => handleMenuLinkClick(e, null, 'contact')}
            >
              <span className="menu-item-number">05</span>
              <span className="menu-item-text">Contact</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
