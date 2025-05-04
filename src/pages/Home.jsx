import React from 'react'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen'>
        <StarBackground />
        <NavBar />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        {/* Footer */}
        <Footer />
    </div>
    
  )
}

export default Home