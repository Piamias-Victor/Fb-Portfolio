import { AiOutlinePlus } from "react-icons/ai"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { FaCodepen, FaEthereum, FaMedal, FaSuitcase } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { MdSchool } from "react-icons/md"
import { SiFreecodecamp } from "react-icons/si"
import { TbFileCertificate, TbWorld } from "react-icons/tb"
import { ExternalDivisionLink } from "../utils/next/anchor"
import { useBoolean } from "../utils/react/boolean"
import { Icon, IconProps } from "../utils/react/icon"
import { useString } from "../utils/react/string"
import { NavButton, OppositeTextButtonRounded } from "./button"
import { AztecIcon, BrumeIcon, EthereumIcon, FreeCodeCampIcon, FreelanceIcon, LunarIcon, MansIcon, PongIcon, ProfilIcon, ReachIcon, SchoolIcon } from "./icon/icon"

export function Card(props: IconProps & { label: string, link: string, buttonIcon: Icon }) {

    const { icon: Icon, label, link, buttonIcon: ButtonIcon } = props

    return <>
        <div className="flex flex-col flex-center h-[195px] max-w-[120px] rounded-xl border border-default bg-default shadow-sm">
            <Icon className="max-w-[100px] max-h-[100px]" />
            <div className="grow flex flex-col flex-center bg-component w-full rounded-b-xl">
                <div className="absolute top-[240px] md:top-[260px] p-1 rounded-full flex flex-center bg-component">
                    <ExternalDivisionLink href={link}>
                        <OppositeTextButtonRounded>
                            <ButtonIcon className="icon-xs lg:icon-md text-default" />
                        </OppositeTextButtonRounded>
                    </ExternalDivisionLink>
                </div>
                <div className="h-2" />
                <span className="p-md text-xs text-center">
                    {label}
                </span>
            </div>
        </div>
    </>
}


export function Resume() {

    const section = useString("Experiences")

    return <div className="bg-component rounded-xl min-h-[300px] shadow-md ">
        <div className="flex flex-center md:gap-4 px-4 py-2">
            <NavButton label="Experiences" icon={FaSuitcase} select={section.current === "Experiences"} section={section} />
            <NavButton label="Projects" icon={FaCodepen} select={section.current === "Projects"} section={section} />
            <NavButton label="Educations" icon={MdSchool} select={section.current === "Educations"} section={section} />
        </div>
        <div className="w-full h-[2px] bg-default" />
        <div className="flex flex-center gap-4 px-4 py-2">
            {section.current === "Experiences" && <Experiences />}
            {section.current === "Projects" && <Projects />}
            {section.current === "Educations" && <Educations />}
        </div>
    </div>
}

export function Experiences() {

    const select = useBoolean(true)

    return <>
        <div className="hidden sm:flex flex-center sm:gap-4">
            <Card icon={ProfilIcon} buttonIcon={AiOutlinePlus} label={"Add one by contacting me!"} link={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"} />
            <Card icon={AztecIcon} buttonIcon={TbWorld} label={"Front-End developer"} link={"https://aztec.network/"} />
            <Card icon={BrumeIcon} buttonIcon={FiGithub} label={"Brume Wallet Co-funder"} link={"https://github.com/brume-wallet"} />
            <Card icon={FreelanceIcon} buttonIcon={FiGithub} label={"Developer freelance"} link={"https://github.com/Piamias-Victor"} />
        </div>
        <div className="sm:hidden flex flex-center gap-4">
            {select.current === false && <div className="flex sm:hidden flex-center">
                <OppositeTextButtonRounded onClick={select.toggle}>
                    <BsChevronLeft className="icon-xs lg:icon-md text-default" />
                </OppositeTextButtonRounded>
            </div>}
            {select.current === true ? <>
                <Card icon={ProfilIcon} buttonIcon={AiOutlinePlus} label={"Add one by contacting me!"} link={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"} />
                <Card icon={AztecIcon} buttonIcon={TbWorld} label={"Front-End developer"} link={"https://aztec.network/"} />
            </>
                : <>
                    <Card icon={BrumeIcon} buttonIcon={FiGithub} label={"Brume Wallet Co-funder"} link={"https://github.com/brume-wallet"} />
                    <Card icon={FreelanceIcon} buttonIcon={FiGithub} label={"Developer freelance"} link={"https://github.com/Piamias-Victor"} />
                </>}
        </div>
        {select.current === true && <div className="flex sm:hidden flex-center">
            <OppositeTextButtonRounded onClick={select.toggle}>
                <BsChevronRight className="icon-xs lg:icon-md text-default" />
            </OppositeTextButtonRounded>
        </div>}
    </>
}

export function Projects() {

    const select = useBoolean(true)

    return <>
        <div className="hidden sm:flex flex-center sm:gap-4">
            <Card icon={LunarIcon} buttonIcon={FaMedal} label={"Lunar Wallet, ETHBrno"} link={"https://devfolio.co/projects/lunar-wallet-34c4"} />
            <Card icon={ReachIcon} buttonIcon={FiGithub} label={"Reach3, NFT degree"} link={"https://github.com/Piamias-Victor/Reach3"} />
            <Card icon={PongIcon} buttonIcon={FiGithub} label={"Pong.io, online Pong game"} link={"https://github.com/Piamias-Victor/transcendance"} />
            <Card icon={SchoolIcon} buttonIcon={FiGithub} label={"42, Multiple projects"} link={"https://github.com/Piamias-Victor"} />
        </div>
        <div className="sm:hidden flex flex-center gap-4">
            {select.current === false && <div className="flex sm:hidden flex-center">
                <OppositeTextButtonRounded onClick={select.toggle}>
                    <BsChevronLeft className="icon-xs lg:icon-md text-default" />
                </OppositeTextButtonRounded>
            </div>}
            {select.current === true ? <>
                <Card icon={LunarIcon} buttonIcon={FaMedal} label={"Lunar Wallet, ETHBrno"} link={"https://devfolio.co/projects/lunar-wallet-34c4"} />
                <Card icon={ReachIcon} buttonIcon={FiGithub} label={"Reach3, NFT degree"} link={"https://github.com/Piamias-Victor/Reach3"} />
            </>
                : <>
                    <Card icon={PongIcon} buttonIcon={FiGithub} label={"Pong.io, online Pong game"} link={"https://github.com/Piamias-Victor/transcendance"} />
                    <Card icon={SchoolIcon} buttonIcon={FiGithub} label={"42, Multiple projects"} link={"https://github.com/Piamias-Victor"} />
                </>}
        </div>
        {select.current === true && <div className="flex sm:hidden flex-center">
            <OppositeTextButtonRounded onClick={select.toggle}>
                <BsChevronRight className="icon-xs lg:icon-md text-default" />
            </OppositeTextButtonRounded>
        </div>}
    </>
}

export function Educations() {

    const select = useBoolean(true)

    return <>
        <div className="hidden sm:flex flex-center sm:gap-4">
            <Card icon={SchoolIcon} buttonIcon={HiOutlineDesktopComputer} label={"42 School, Paris"} link={"https://42.fr/en/homepage/"} />
            <Card icon={EthereumIcon} buttonIcon={FaEthereum} label={"Crypto certification"} link={"https://ethernaut.openzeppelin.com/"} />
            <Card icon={FreeCodeCampIcon} buttonIcon={SiFreecodecamp} label={"Free Code Camp"} link={"https://www.freecodecamp.org/"} />
            <Card icon={MansIcon} buttonIcon={TbFileCertificate} label={"Bachelor's in Sales"} link={"https://iut-laval.univ-lemans.fr/fr/departements/techniques-de-commercialisation.html"} />
        </div>
        <div className="sm:hidden flex flex-center gap-4">
            {select.current === false && <div className="flex sm:hidden flex-center">
                <OppositeTextButtonRounded onClick={select.toggle}>
                    <BsChevronLeft className="icon-xs lg:icon-md text-default" />
                </OppositeTextButtonRounded>
            </div>}
            {select.current === true ? <>
                <Card icon={SchoolIcon} buttonIcon={HiOutlineDesktopComputer} label={"42 School"} link={"https://42.fr/en/homepage/"} />
                <Card icon={EthereumIcon} buttonIcon={FaEthereum} label={"Crypto certification"} link={"https://ethernaut.openzeppelin.com/"} />
            </>
                : <>
                    <Card icon={FreeCodeCampIcon} buttonIcon={SiFreecodecamp} label={"Free Code Camp"} link={"https://www.freecodecamp.org/"} />
                    <Card icon={MansIcon} buttonIcon={TbFileCertificate} label={"Bachelor's in Sales"} link={"https://iut-laval.univ-lemans.fr/fr/departements/techniques-de-commercialisation.html"} />
                </>}
        </div>
        {select.current === true && <div className="flex sm:hidden flex-center">
            <OppositeTextButtonRounded onClick={select.toggle}>
                <BsChevronRight className="icon-xs lg:icon-md text-default" />
            </OppositeTextButtonRounded>
        </div>}
    </>
}