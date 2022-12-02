import { BsMailbox2 } from "react-icons/bs"
import { SiGithub, SiLinkedin, SiTelegram, SiTwitter } from "react-icons/si"
import { ExternalDivisionLink } from "../utils/next/anchor"
import { useBoolean } from "../utils/react/boolean"
import { IconProps } from "../utils/react/icon"
import { OppositeTextButtonDeploy } from "./button"

export function Contacts() {

    const deploy = useBoolean(true)

    return <div className="w-full px-4">
        <div className="bg-component p-1 rounded-xl shadow-md">
            <OppositeTextButtonDeploy deploy={deploy}
                onClick={deploy.toggle}>
                My Contacts
            </OppositeTextButtonDeploy>
            {deploy.current === true && <>
                <div className="h-2" />
                <Contact icon={SiGithub} label={"Github"} link={"https://github.com/Piamias-Victor"} />
                <Contact icon={SiLinkedin} label={"Linkedin"} link={"https://www.linkedin.com/in/victor-piamias/"} />
                <Contact icon={SiTelegram} label={"Telegram"} link={"https://t.me/piamiasVictor"} />
                <Contact icon={BsMailbox2} label={"Mail"} link={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"} />
                <Contact icon={SiTwitter} label={"Twitter"} link={"https://twitter.com/Heliatr0p"} />
                <div className="h-2" />
            </>}
        </div>
    </div>
}


export function Contact(props: IconProps & { label: string, link: string }) {

    const { icon: Icon, label, link } = props

    return <ExternalDivisionLink className="p-md cursor-pointer rounded-xl flex w-full text-sm text-gray gap-2 hover:bg-gray hover:text-colored group-enabled:group-active:scale-90 transition-transform"
        href={link}>
        <Icon className="icon-sm" />
        <span className="font-semibold">
            {label}
        </span>
    </ExternalDivisionLink>
}
