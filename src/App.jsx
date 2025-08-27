import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Services from './components/Services'
import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
import Work from './components/Work'
import Testimonial from "./components/Testimonial";

// import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='container px-6 sm:px-20  mx-auto'>
      <Navbar/>
      <Hero/>
      {/* <Services/> */}
      <About/>
      <Work />
      <Testimonial />
      {/* <Portfolio/> */}
      {/* <Contact/> */}  
    </div>
      {/* <Footer/> */}
    </>
  )
}

export default App
