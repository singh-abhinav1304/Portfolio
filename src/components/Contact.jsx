import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_ag2t5pn",
      "template_asqhkda",
      form.current,
      "uLHyBlFF7xm5hKewb"
    )
      .then(() => {
        alert("Message sent successfully!")
      })
      .catch(() => {
        alert("Failed to send message.")
      })
  }

  return (

    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-400">
          Contact Me
        </h2>


        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mt-10 md:mt-16">

          {/* Left Side */}
          <div className="space-y-6">

            <p className="text-gray-400 text-sm md:text-base">
              If you'd like to collaborate, discuss projects, or just say hi,
              feel free to reach out.
            </p>


            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400 text-lg md:text-xl" />
              <span className="text-sm md:text-base break-all">
                abhinav021106@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-sky-400 text-lg md:text-xl" />
              <a
                href="https://www.linkedin.com/in/singhabhinav13/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition text-sm md:text-base"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-sky-400 text-lg md:text-xl" />
              <a
                href="https://github.com/singh-abhinav1304"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition text-sm md:text-base"
              >
                GitHub
              </a>
            </div>

          </div>


          {/* Right Side Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 bg-slate-900/40 p-5 md:p-6 rounded-lg"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 md:p-4 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-sky-400 text-sm md:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 md:p-4 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-sky-400 text-sm md:text-base"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 md:p-4 bg-slate-800 rounded outline-none focus:ring-2 focus:ring-sky-400 text-sm md:text-base"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-sky-500 rounded hover:bg-sky-400 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </motion.section>

  )
}

export default Contact