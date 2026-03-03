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
      className="relative z-10 py-32 px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-sky-400 text-center">
          About Me
        </h2>


        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-gray-400 leading-relaxed">
              I'm Abhinav, a BCA student passionate about Artificial Intelligence,
              Machine Learning and Data Science. I enjoy building intelligent
              systems and solving real-world problems using data.
            </p>

            <p className="text-gray-400 mt-6">
              Currently I am learning Python, Machine Learning, SQL and modern
              web technologies while building projects to strengthen my
              development and problem solving skills.
            </p>

          </div>


          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-400">BCA</h3>
              <p className="text-gray-400 mt-2">Student</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-400">AI/ML</h3>
              <p className="text-gray-400 mt-2">Learning</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-400">Python</h3>
              <p className="text-gray-400 mt-2">Developer</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-sky-400">Projects</h3>
              <p className="text-gray-400 mt-2">Building</p>
            </div>

          </div>

        </div>
        {/* Timeline */}
        <div className="max-w-5xl mx-auto mt-24">

          <h3 className="text-2xl font-bold text-center text-sky-400 mb-12">
            My Journey
          </h3>

          <div className="relative">

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