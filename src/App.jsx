import React from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import information from "./constants/global";
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <Profile />
        <About />
        <Experience info={information}/>
        <Projects info={information}/>
        <Contact info={information}/>
        <Footer />
    </div>
  )
}

export default App