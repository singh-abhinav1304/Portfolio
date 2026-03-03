import { motion } from "framer-motion"
import { FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiNumpy, SiPandas, SiMysql, SiJavascript } from "react-icons/si"

function Skills() {

  const skillCategories = [

    {
      title: "AI / Machine Learning",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
      ]
    },

    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]
    },

    {
      title: "Database",
      skills: [
        { name: "SQL", icon: <SiMysql /> }
      ]
    }

  ]


  return (

    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400">
          Skills
        </h2>


        <div className="mt-12 md:mt-16 space-y-10 md:space-y-12">

          {skillCategories.map((category, index) => (

            <div key={index}>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-5 md:mb-6">
                {category.title}
              </h3>


              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="bg-slate-800 p-4 md:p-6 rounded-xl flex flex-col items-center gap-2 md:gap-3 hover:scale-105 hover:bg-sky-500/20 transition duration-300"
                  >

                    <div className="text-2xl md:text-3xl text-sky-400">
                      {skill.icon}
                    </div>

                    <p className="text-gray-300 text-sm md:text-base">
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </motion.section>

  )
}

export default Skills