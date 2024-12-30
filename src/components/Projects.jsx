import { PROJECTS } from "../constants"
import { motion } from "motion/react"

export const Projects = () => {
    return <div className="border-b border-neutral-900 pb-4">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}>
            <h1 className="my-20 text-center text-4xl">Projects</h1>
        </motion.div>
        <div>{PROJECTS.map((project, idx) => (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <img
                        className="rounded-md mt-10"
                        src={project.image}
                        width={220}
                        //height={250}
                        alt={project.title} >
                    </img>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4 mt-4">
                    <motion.h6 whileHover={{scale:1.1}} className="mb-2 font-semibold"><a href={project.link} target="_blank">{project.title}</a> </motion.h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
}