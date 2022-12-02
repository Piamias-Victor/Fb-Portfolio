
import { FaFacebook } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter';
import { OppositeTextButtonRounded } from "../button";
import { useTheme } from "../context/theme";


export function Header() {
    return <div className="py-2 px-3 flex items-center w-full bg-component shadow-md transition-colors">
        <div className="w-[50px] lg:w-[200px] flex items-center gap-2 text-colored">
            <FaFacebook className="dark:text-fb-blue icon-3xl" />
            <span className="hidden font-semibold lg:block text-base">Facebook Portfolio</span>
        </div>
        <div className="grow flex flex-center">
            <span className="text-sm lg:text-2xl font-semibold text-colored">
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
        <ThemeButton />
    </div>
}

function ThemeButton() {

    const theme = useTheme()

    return <div className="w-[50px] lg:w-[200px] flex flex-row-reverse">
        {theme.current === "light"
            ? <OppositeTextButtonRounded className=" bg-contrast text-colored"
                onClick={() => theme.set("dark")}>
                <FiSun className="icon-md" />
            </OppositeTextButtonRounded>
            : <OppositeTextButtonRounded className=" bg-contrast text-colored"
                onClick={() => theme.set("light")}>
                <FiMoon className="icon-md" />
            </OppositeTextButtonRounded>}
    </div>
}