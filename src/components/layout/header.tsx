
import { FaFacebook } from "react-icons/fa"

export function Header() {
    return <div className="py-2 px-3 flex items-center w-full bg-white shadow-md">
        <div className="flex items-center gap-2 text-colored">
            <FaFacebook className="icon-3xl" />
            <span className="font-semibold">Facebook</span>
        </div>
        <div className="grow" />
        <div className="rounded-full bg-gray flex flex-center">
            <img className="icon-3xl"
                src="/memoji.png" alt="profil" />
        </div>
    </div>
}