import { useMemo } from "react"
import { FaCodepen, FaSuitcase } from "react-icons/fa"
import { MdSchool } from "react-icons/md"
import { IconProps } from "../utils/react/icon"
import { StringHandle, useString } from "../utils/react/string"

export function Presentation() {
    return <div className="w-full flex">
        <div className="w-[370px]">

        </div>
        <div className="grow flex justify-center">
            <Resume />
        </div>
        <div className="w-[370px]">

        </div>
    </div>
}

export function Resume() {

    const section = useString("Experiences")

    return <div className="bg-white rounded-xl h-[300px] w-[600px] shadow-md">
        <div className="flex flex-center gap-4 px-4">
            <NavButton label="Experiences" icon={FaSuitcase} select={section.current === "Experiences"} section={section} />
            <NavButton label="Projects" icon={FaCodepen} select={section.current === "Projects"} section={section} />
            <NavButton label="Educations" icon={MdSchool} select={section.current === "Educations"} section={section} />
        </div>
        <div className="w-full h-[2px] bg-default" />
    </div>
}

export function NavButton(props: IconProps & { label: string, select: boolean, section: StringHandle }) {

    const { label, icon: Icon, select, section } = props

    const color = useMemo(() => {
        if (select === true) return "text-colored"
        return "text-gray"
    }, [select])

    return <button className={`flex flex-center gap-2 h-[70px] w-[200px] font-semibold ${color}`}
        onClick={() => section.set(label)}>
        <Icon className="icon-md" />
        <span>{label}</span>
    </button>
}