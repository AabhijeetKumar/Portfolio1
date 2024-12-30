import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "motion/react"

export const Navbar = () => {
    return (
        <nav className=" mb-10 flex items-center justify-between py-6">
            <div className=" flex flex-shrink-0 items-center">
                <img className="mx-2 w-12"
                    src={logo} alt="AK"></img>
            </div>
            <div className="m-8 flex items-center justify-evenly gap-5 text-3xl">

                <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://www.linkedin.com/in/proabhi/"
                    target="_blank"
                ><FaLinkedin /></motion.a>
                <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://github.com/AabhijeetKumar"
                    target="_blank"
                ><FaGithub /></motion.a>
                <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://x.com/MeAbhijeetkumar"
                    target="_blank"
                ><FaSquareXTwitter /></motion.a>
                <motion.a
                    whileHover={{ scale: 1.5 }}
                    href="https://www.instagram.com/abhi_eat/"
                    target="_blank"
                ><FaInstagram /></motion.a>
            </div>
        </nav>
    )
}
