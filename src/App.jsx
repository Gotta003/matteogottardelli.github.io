import { Suspense, useState } from 'react'
import Nav from './components/Nav'
import Hero from './sections/hero'
import Who from './sections/who'
import Research from './sections/research'
import Experience from './sections/experience'
import Projects from './sections/projects'
import Skills from './sections/skills'
import { Education, Contact } from './sections/education'
import PopoverProvider from './popover/PopoverProvider'

export default function App() {
  return (
    <PopoverProvider>
      <div className="grain" aria-hidden="true"></div>
      <Nav/>
      <Suspense fallback={null}>
        <Hero/>
      </Suspense>
      <main>
        <Who/>
        <Research/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Education/>
      </main>
      <Contact/>
    </PopoverProvider>
  )
}
