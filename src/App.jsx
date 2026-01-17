import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ConstructionPage from './components/ConstructionPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProjectDetail from './components/ProjectDetail'
import Footer from './components/Footer'
import { developmentProjects } from './components/Development'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  // 从URL hash读取页面和项目
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    
    if (hash.startsWith('development/')) {
      const slug = hash.replace('development/', '')
      const project = developmentProjects.find(p => 
        p.title.toLowerCase().replace(/\s+/g, '-') === slug
      )
      if (project) {
        setSelectedProject(project)
        setCurrentPage('project')
      } else {
        window.location.hash = ''
        setCurrentPage('home')
      }
    } else if (hash === 'construction') {
      setCurrentPage('construction')
      setSelectedProject(null)
    } else if (hash === 'about') {
      setCurrentPage('about')
      setSelectedProject(null)
    } else if (hash === 'contact') {
      setCurrentPage('contact')
      setSelectedProject(null)
    } else {
      setCurrentPage('home')
      setSelectedProject(null)
    }
  }, [])

  // 监听hash变化（浏览器前进/后退）
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      
      if (hash.startsWith('development/')) {
        const slug = hash.replace('development/', '')
        const project = developmentProjects.find(p => 
          p.title.toLowerCase().replace(/\s+/g, '-') === slug
        )
        if (project) {
          setSelectedProject(project)
          setCurrentPage('project')
        } else {
          setSelectedProject(null)
          setCurrentPage('home')
        }
      } else if (hash === 'construction') {
        setCurrentPage('construction')
        setSelectedProject(null)
      } else if (hash === 'about') {
        setCurrentPage('about')
        setSelectedProject(null)
      } else if (hash === 'contact') {
        setCurrentPage('contact')
        setSelectedProject(null)
      } else {
        setCurrentPage('home')
        setSelectedProject(null)
      }
      
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // 当页面改变时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const handleProjectClick = (project) => {
    const slug = project.title.toLowerCase().replace(/\s+/g, '-')
    window.location.hash = `development/${slug}`
    setSelectedProject(project)
    setCurrentPage('project')
  }

  const handleCloseProject = () => {
    window.location.hash = ''
    setSelectedProject(null)
    setCurrentPage('home')
  }

  const renderPage = () => {
    if (currentPage === 'project' && selectedProject) {
      return <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
    }
    
    switch (currentPage) {
      case 'construction':
        return <ConstructionPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header onProjectClick={handleProjectClick} />
      <main>
        {renderPage()}
      </main>
      {currentPage !== 'project' && <Footer />}
    </div>
  )
}

export default App
