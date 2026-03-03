import { motion } from "framer-motion"

function About() {
  const timeline = [
    { year: "2023", text: "Started BCA" },
    { year: "2025", text: "Learning AI" },
    { year: "2026", text: "IoT Project" },
    { year: "2026", text: "ML Projects" },
    { year: "2027", text: "New Achievement" }
  ]

  return (

    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 text-center">
          About Me
        </h2>


        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-10 md:mt-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I'm Abhinav, a BCA student passionate about Artificial Intelligence,
              Machine Learning and Data Science. I enjoy building intelligent
              systems and solving real-world problems using data.
            </p>

            <p className="text-gray-400 mt-4 md:mt-6 text-sm md:text-base">
              Currently I am learning Python, Machine Learning, SQL and modern
              web technologies while building projects to strengthen my
              development and problem solving skills.
            </p>

          </div>


          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">

            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-sky-400">BCA</h3>
              <p className="text-gray-400 mt-2 text-sm">Student</p>
            </div>

            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-sky-400">AI/ML</h3>
              <p className="text-gray-400 mt-2 text-sm">Learning</p>
            </div>

            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-sky-400">Python</h3>
              <p className="text-gray-400 mt-2 text-sm">Developer</p>
            </div>

            <div className="bg-slate-800 p-4 md:p-6 rounded-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-sky-400">Projects</h3>
              <p className="text-gray-400 mt-2 text-sm">Building</p>
            </div>

          </div>

        </div>


        {/* Timeline */}
<div className="max-w-5xl mx-auto mt-24">

  <h3 className="text-2xl font-bold text-center text-sky-400 mb-12">
    My Journey
  </h3>

  {/* MOBILE TIMELINE (Snake) */}
  <div className="md:hidden relative border-l-2 border-slate-700 ml-4">

    {timeline.map((item, index) => (

      <div
        key={index}
        className="mb-12 ml-6"
      >

        <div className="absolute -left-3 w-6 h-6 bg-sky-400 rounded-full"></div>

        <h4 className="font-semibold text-lg">
          {item.year}
        </h4>

        <p className="text-gray-400 text-sm mt-1">
          {item.text}
        </p>

      </div>

    ))}

  </div>


  {/* DESKTOP TIMELINE (Original Horizontal) */}
  <div className="hidden md:block relative">

    {/* horizontal line */}
    <div className="absolute top-4 left-0 w-full h-1 bg-slate-700"></div>

    <div className="flex justify-between text-center relative">

      {timeline.map((item, index) => (

        <div key={index} className="flex-1">

          {/* dot */}
          <div className="w-6 h-6 bg-sky-400 rounded-full mx-auto"></div>

          <h4 className="mt-6 font-semibold">
            {item.year}
          </h4>

          <p className="text-gray-400 mt-2 text-sm px-2">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>


      </div>

    </motion.section>
  )
}

export default About