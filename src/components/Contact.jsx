import { CONTACT } from "../constants"
import { motion } from "motion/react"

export const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -70 }}
                transition={{ duration: 0.5 }}>
            <h1 className="my-14 text-center text-4xl">
                Get in Touch
            </h1>
            </motion.div>
            <div className="text-center tracking-tighter">
                
                <motion.a 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                href="#" className="border-b">{CONTACT.email}</motion.a>
            </div>
        </div>
    )
}