import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }

})
export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="m-20 ml-5 text-center text-4xl">Technologies</motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-500" title="HTML5" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-7xl text-blue-500" title="CSS3" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-500" title="JavaScript" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiReact className=" text-cyan-400 text-7xl" title="React" />

                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGit className="text-7xl text-red-500" title="Git" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className=" text-7xl text-white" title="GitHub" />
                </motion.div>


            </motion.div>
        </div>
    )
}