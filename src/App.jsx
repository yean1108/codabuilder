import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Process from './components/Process'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <About />
        <Process />
      </main>
      <Footer />
    </div>
  )
}

export default App
