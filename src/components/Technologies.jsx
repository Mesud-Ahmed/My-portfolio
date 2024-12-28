import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export default function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="m-20 text-center text-4xl">Technologies</h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-500" title="HTML5" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-7xl text-blue-500" title="CSS3" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-500" title="JavaScript" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiReact className=" text-cyan-400 text-7xl" title="React" />

                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGit className="text-7xl text-red-500" title="Git" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className=" text-7xl text-black" title="GitHub" />
                </div>


            </div>
        </div>
    )
}