import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className="border-t border-slate-800 mt-20 py-10 text-gray-400">

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Navigation Links */}
                <div className="flex justify-center gap-8 mb-6 text-sm">

                    <a href="#about" className="hover:text-sky-400 transition">
                        About
                    </a>

                    <a href="#skills" className="hover:text-sky-400 transition">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-sky-400 transition">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-sky-400 transition">
                        Contact
                    </a>

                </div>


                {/* Social Icons */}
                <div className="flex justify-center gap-6 text-xl mb-6">

                    <a
                        href="https://github.com/singh-abhinav1304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/singhabhinav13/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                </div>


                {/* Copyright */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Abhinav Singh
                </p>

                <p className="text-xs mt-2 text-gray-500">
                    Built with React & Tailwind CSS
                </p>

            </div>

        </footer>
    )
}

export default Footer