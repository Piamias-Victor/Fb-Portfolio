
import { FaFacebook } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';


export function Header() {
    return <div className="py-2 px-3 flex items-center w-full bg-white shadow-md">
        <div className="w-[200px] flex items-center gap-2 text-colored">
            <FaFacebook className="icon-3xl" />
            <span className="font-semibold">Facebook Portfolio</span>
        </div>
        <div className="grow flex flex-center">
            <span className="text-2xl font-semibold text-colored">
                Piamias Victor - <Typewriter
                    words={['Web developer', 'Crypto enthusiast', 'Freelancer', 'Web developer']}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </div>
        <div className="w-[200px] flex flex-row-reverse">
            <div className="rounded-full bg-gray flex flex-center">
                <img className="icon-3xl"
                    src="/memoji.png" alt="profil" />
            </div>
        </div>

    </div>
}