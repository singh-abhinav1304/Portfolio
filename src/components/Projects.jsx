import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

function Projects() {

  const projects = [

    {
      title: "IoT Solar Powered Mini Cooling Box",
      description:
        "An IoT system that stores medicine and keeps it preserved at a certain temperature.",
      tech: "Arduino • Sensors • IoT",
      github: "https://github.com/yourrepo",
      demo: "#"
    },

    {
      title: "Data Analysis Project",
      description:
        "Data analysis project using Pandas and NumPy to extract insights from datasets.",
      tech: "Python • Pandas • NumPy",
      github: "https://github.com/yourrepo",
      demo: "#"
    },

    {
      title: "ML Prediction Model",
      description:
        "Machine learning model that predicts outcomes based on training data.",
      tech: "Python • Scikit Learn • ML",
      github: "https://github.com/yourrepo",
      demo: "#"
    },

  ]

  return (

    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400">
          Projects
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 p-5 md:p-6 rounded-xl hover:scale-105 transition duration-300"
            >

              <h3 className="text-lg md:text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm md:text-sm">
                {project.description}
              </p>

              <p className="text-sky-400 mt-4 text-sm">
                {project.tech}
              </p>


              <div className="flex flex-wrap gap-4 mt-6">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={project.demo}
                  className="px-4 py-1 bg-sky-500 rounded hover:bg-sky-400 transition"
                >
                  Live
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </motion.section>

  )
}

export default Projects