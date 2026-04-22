import React from 'react'
import Navbar from './components/Navbar.jsx'
import SideLabel from './components/SideLabel.jsx'
import CustomScrollbar from './components/Scrollbar.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Home from './sections/Home/Home.jsx'
import About from './sections/About/About.jsx'
import Experience from './sections/Experience/Experience.jsx'
import Projects from './sections/Projects/Projects.jsx'
import Resume from './sections/Resume/Resume.jsx'
import Contact from './sections/Contact/Contact.jsx'

export default function App() {
  return (
    <>
      <CustomScrollbar />

      {/* <ErrorBoundary name="Navbar">
        <Navbar />
      </ErrorBoundary> */}

      <SideLabel />

      <main>
        <ErrorBoundary name="Home">
          <Home />
        </ErrorBoundary>
        <ErrorBoundary name="About">
          <About />
        </ErrorBoundary>
        <ErrorBoundary name="Experience">
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary name="Projects">
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary name="Resume">
          <Resume />
        </ErrorBoundary>
        <ErrorBoundary name="Contact">
          <Contact />
        </ErrorBoundary>
      </main>
    </>
  )
}
