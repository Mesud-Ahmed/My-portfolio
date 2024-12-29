import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import logo from '../assets/logo.png'
export default function NavBar() {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" width={100} height={100} className="rounded-full" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/mesud-ahmed-756243285"><FaLinkedin /></a>
                <a href="https://github.com/Mesud-Ahmed"><FaGithub /></a>
                <a href="https://t.me/mas_4897"><FaTelegram /></a>
            </div>

        </nav>
    )
}