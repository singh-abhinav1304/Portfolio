import { FaGithub, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

function Hero() {

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center text-white px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* LEFT SIDE */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-sky-400">Abhinav</span>
          </h1>


          <div className="text-xl text-gray-400 mt-6 h-10">

            <TypeAnimation
              sequence={[
                "AI / ML Engineer",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Data Science Learner",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>


          <p className="text-gray-500 mt-6 max-w-xl">
            Passionate about Artificial Intelligence, Machine Learning
            and building intelligent systems using data.
          </p>


          {/* Buttons */}
          <div className="flex gap-6 mt-10">

            <a
              href="#projects"
              className="px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-400 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-sky-500 rounded-lg hover:bg-sky-500/20 transition"
            >
              Download Resume
            </a>

          </div>


          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-2xl">

            <a target="_blank" href="https://github.com/singh-abhinav1304">
              <FaGithub className="hover:text-sky-400"/>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/singhabhinav13/">
              <FaLinkedin className="hover:text-sky-400"/>
            </a>

          </div>


          {/* Mini Stats */}
          <div className="flex gap-10 mt-12 text-center">

            <div>
              <h3 className="text-2xl font-bold text-sky-400">3+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-400">8+</h3>
              <p className="text-gray-400">Skills</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-400">AI</h3>
              <p className="text-gray-400">Focused</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <img
            src="/cover.png"
            alt="developer avatar"
            className="w-80 rounded-full border border-sky-500"
          />

        </div>


      </div>

    </section>
  )
}

export default Hero