import './index.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {

  return (
    <div className='container mx-auto px-8 overflow-x-hidden  antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
