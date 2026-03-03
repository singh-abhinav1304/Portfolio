import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

  }, [])

  return (

    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md text-white z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-sky-400">
          Abhinav
        </h1>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#about"
              className={`hover:text-sky-400 transition ${active === "about" ? "text-sky-400" : ""}`}>
              About
            </a>
          </li>

          <li>
            <a href="#skills"
              className={`hover:text-sky-400 transition ${active === "skills" ? "text-sky-400" : ""}`}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects"
              className={`hover:text-sky-400 transition ${active === "projects" ? "text-sky-400" : ""}`}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact"
              className={`hover:text-sky-400 transition ${active === "contact" ? "text-sky-400" : ""}`}>
              Contact
            </a>
          </li>

        </ul>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

      </div>


      {/* Dark Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}


      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-950 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl"
          >
            <FaTimes />
          </button>
        </div>


        {/* Links */}
        <div className="flex flex-col gap-8 px-8 text-lg">

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>

      </div>

    </nav>

  )
}

export default Navbar