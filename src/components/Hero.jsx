import { INTRO_CONTENT } from "../constants"
import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


export const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-40">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-4/6">
                    <div className="flex flex-col items-center lg:items-start lg:px-16">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"

                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-14 lg:text-8xl">
                            Abhijeet Kumar
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text text-5xl tracking-tight text-transparent">
                            Full Stack Developer

                        </motion.span>
                        <motion.div
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible">
                            <TypeAnimation


                                sequence={[

                                    // Same substring at the start will only be typed out once, initially
                                    'I Design', 1000,
                                    'I Develope', 1000,
                                    'I Deploy', 1000
                                ]}
                                wrapper="span"
                                speed={15}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {INTRO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                //<div className="w-full lg:w-1/4 lg:pt-8 ">
                  
               // </div>
            </div>
        </div>
    )
}

