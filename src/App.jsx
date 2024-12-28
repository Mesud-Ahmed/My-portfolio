import './index.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
function App() {

  return (
    <div className='container mx-auto px-8 overflow-x-hidden  antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <NavBar />
      <Hero />
      <About />

    </div>
  )
}

export default App
