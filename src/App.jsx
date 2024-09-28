import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <div className="w-full h-auto bg-zinc-900 border border-zinc-900">
        <Navbar />
        <Profile />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div> 
    </>
  )
}

export default App
