import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
