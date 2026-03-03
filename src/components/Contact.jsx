import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_ag2t5pn",     // replace with your service ID
      "template_asqhkda",     // replace with your template ID
      form.current,
      "uLHyBlFF7xm5hKewb"           // replace with your public key
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
      className="relative z-10 py-32 px-6 text-white"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-sky-400">
          Contact Me
        </h2>


        <div className="grid md:grid-cols-2 gap-12 mt-16">


          {/* Left Side */}
          <div className="space-y-6">

            <p className="text-gray-400">
              If you'd like to collaborate, discuss projects, or just say hi,
              feel free to reach out.
            </p>


            <div className="flex items-center gap-4">
              <FaEnvelope className="text-sky-400" />
              <span>abhinav021106@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-sky-400" />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-sky-400" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>


          {/* Right Side Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-slate-800 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-slate-800 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-slate-800 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 rounded hover:bg-sky-400"
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