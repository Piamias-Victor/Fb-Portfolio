
import { FaFacebook } from "react-icons/fa"

export function Header() {
    return <div className="py-2 px-3 flex items-center w-full bg-white shadow-md">
        <div className="flex items-center gap-2 text-colored">
            <FaFacebook className="icon-3xl" />
            <span>Facebook Portfolio</span>
        </div>
    </div>
}