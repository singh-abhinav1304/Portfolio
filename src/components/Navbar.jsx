import { useState, useEffect } from "react"

function Navbar() {
  const [active, setActive] = useState("")
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

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-sky-400">
          Abhinav
        </h1>

        <ul className="flex gap-8 text-gray-300">

          <li>
            <a
              href="#about"
              className={`hover:text-sky-400 ${active === "about" ? "text-sky-400" : ""}`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`hover:text-sky-400 ${active === "skills" ? "text-sky-400" : ""}`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`hover:text-sky-400 ${active === "projects" ? "text-sky-400" : ""}`}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`hover:text-sky-400 ${active === "contact" ? "text-sky-400" : ""}`}
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar