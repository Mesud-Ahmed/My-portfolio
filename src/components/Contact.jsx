import { CONTACT } from "../constants"
import { motion } from "motion/react"
export default function Contact() {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}

            className="my-10 text-center text-4xl">Get in touch</motion.h2>
            <div className="text-center" >
                <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="my-4"> <a href="tel:+251941084897" >{CONTACT.phoneNo}</a></motion.p>
                <a href="mailto:mesudahmed94@gmail.com" className="hover:underline ">{CONTACT.email}</a>

            </div>
        </div>
    )
}