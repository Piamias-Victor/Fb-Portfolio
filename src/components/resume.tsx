import { AiOutlinePlus } from "react-icons/ai"
import { FaCodepen, FaSuitcase } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { MdSchool } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import { Icon, IconProps } from "../utils/react/icon"
import { useString } from "../utils/react/string"
import { NavButton, OppositeTextButtonRounded } from "./button"
import { AztecIcon, BrumeIcon, FreelanceIcon, ProfilIcon } from "./icon/icon"

export function Experience(props: IconProps & { label: string, link: string, buttonIcon: Icon }) {

    const { icon: Icon, label, link, buttonIcon: ButtonIcon } = props

    return <div className="flex flex-col flex-center h-[195px] w-[120px] rounded-xl border border-default bg-default shadow-sm">
        <Icon className="w-[100px] h-[100px]" />
        <div className="grow flex flex-col flex-center bg-white w-full rounded-b-xl">
            <div className="absolute top-[260px] p-1 rounded-full flex flex-center bg-white">
                <OppositeTextButtonRounded>
                    <ButtonIcon className="icon-md text-default" />
                </OppositeTextButtonRounded>
            </div>
            <div className="h-2" />
            <span className="p-md text-xs text-center">
                {label}
            </span>
        </div>
    </div>
}


export function Resume() {

    const section = useString("Experiences")

    return <div className="bg-white rounded-xl h-[300px] w-[600px] shadow-md">
        <div className="flex flex-center gap-4 px-4 py-2">
            <NavButton label="Experiences" icon={FaSuitcase} select={section.current === "Experiences"} section={section} />
            <NavButton label="Projects" icon={FaCodepen} select={section.current === "Projects"} section={section} />
            <NavButton label="Educations" icon={MdSchool} select={section.current === "Educations"} section={section} />
        </div>
        <div className="w-full h-[2px] bg-default" />
        <div className="flex flex-center gap-4 px-4 py-2">
            <Experience icon={ProfilIcon} buttonIcon={AiOutlinePlus} label={"Add one by contacting me!"} link={""} />
            <Experience icon={AztecIcon} buttonIcon={TbWorld} label={"Front-End developer"} link={""} />
            <Experience icon={BrumeIcon} buttonIcon={FiGithub} label={"Brume Wallet Co-funder"} link={""} />
            <Experience icon={FreelanceIcon} buttonIcon={FiGithub} label={"Developer freelance"} link={""} />
        </div>
    </div>
}