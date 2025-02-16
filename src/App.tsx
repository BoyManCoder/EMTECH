import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import MissionPage from './components/MissionPage'
import NavBar from './components/NavBar'
import ProgramPage from './components/ProgramPage'
import Events from './components/Events'

function App() {

  return (
    <>
    <NavBar/>
    <HomePage/>
    <MissionPage/>
    <About/>
    <Contact/>
    <ProgramPage/>
    <Events/>
    <Footer/>
    </>
  )
}

export default App
