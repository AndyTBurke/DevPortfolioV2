import React from 'react'
import Hero from "./Hero"
import Nav from "./Nav"
import Projects from './assets/Projects'
import WhatIKnow from "./WhatIKnow"
import Contact from './Contact'

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhatIKnow />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
