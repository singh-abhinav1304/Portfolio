import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollProgress from "../components/ScrollProgress"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollProgress />
    </>
  )
}

export default Home