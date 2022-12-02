import { FaSearch } from "react-icons/fa"
import { GiBrickWall } from "react-icons/gi"
import { IoLibrarySharp } from "react-icons/io5"
import { MdDesignServices } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"
import { useBoolean } from "../utils/react/boolean"
import { IconProps } from "../utils/react/icon"
import { OppositeTextButtonDeploy } from "./button"

export function Skills() {

    const deploy = useBoolean(true)

    return <div className="w-full px-4">
        <div className="bg-component p-1 rounded-xl shadow-md">
            <OppositeTextButtonDeploy deploy={deploy}
                onClick={deploy.toggle}>
                My Skills
            </OppositeTextButtonDeploy>
            {deploy.current === true && <>
                <div className="h-2" />
                <Skill icon={MdDesignServices} label={"UI/UX Design"} />
                <Skill icon={IoLibrarySharp} label={"Autonomy and ongoing learning"} />
                <Skill icon={RiTeamFill} label={"Group work and team spirit"} />
                <Skill icon={GiBrickWall} label={"Strong organisation"} />
                <Skill icon={FaSearch} label={"Technological scanning"} />
                <div className="h-2" />
            </>}
        </div>
    </div>
}


export function Skill(props: IconProps & { label: string }) {

    const { icon: Icon, label } = props

    return <div className="p-md rounded-xl flex w-full text-sm text-gray gap-2 hover:bg-gray hover:text-colored group-enabled:group-active:scale-90 transition-transform">
        <Icon className="icon-sm" />
        <span className="font-semibold">
            {label}
        </span>
    </div>
}
