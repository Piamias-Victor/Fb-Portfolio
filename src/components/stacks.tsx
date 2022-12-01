import { useMemo } from "react"
import { FiGithub } from "react-icons/fi"
import { useBoolean } from "../utils/react/boolean"
import { IconProps } from "../utils/react/icon"
import { OppositeTextButtonDeploy } from "./button"

export function Stack() {

    const deploy = useBoolean(true)

    return <div className="w-full px-4">
        <div className="bg-white p-1 rounded-xl shadow-md">
            <OppositeTextButtonDeploy deploy={deploy}
                onClick={deploy.toggle}>
                My Stack
            </OppositeTextButtonDeploy>
            {deploy.current === true && <>
                <div className="h-2" />
                <Skill icon={FiGithub} label={"JavaScript"} level />
                <Skill icon={FiGithub} label={"TypeScript"} level />
                <Skill icon={FiGithub} label={"React js"} level />
                <Skill icon={FiGithub} label={"HTML"} level />
                <Skill icon={FiGithub} label={"CSS"} level />
                <Skill icon={FiGithub} label={"Tailwind CSS"} level />
                <Skill icon={FiGithub} label={"C / C++"} level />
                <Skill icon={FiGithub} label={"Node js"} level />
                <Skill icon={FiGithub} label={"Ethereum"} level />
                <Skill icon={FiGithub} label={"The Graph"} level />
                <Skill icon={FiGithub} label={"Solidity"} />
                <Skill icon={FiGithub} label={"Rust"} />
                <Skill icon={FiGithub} label={"Web Assembly"} />
                <Skill icon={FiGithub} label={"Figma"} />
                <Skill icon={FiGithub} label={"Docker"} />
                <div className="h-2" />
            </>}
        </div>
        <div className="h-2" />
        {deploy.current && <>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-green-400 shrink-0`} />
                <span className="text-xs">Independent and efficient on these stacks, already used in my professional experiences.</span>
            </div>
            <div className="h-1" />
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-yellow-400 shrink-0`} />
                <span className="text-xs">Formed and already used these stacks in personal projects, able to perform the majority of tasks.</span>
            </div>
        </>}
    </div>
}

export function Skill(props: IconProps & { label: string, level?: boolean }) {

    const { icon: Icon, label, level } = props

    const color = useMemo(() => {
        if (level === true) return "bg-green-400"
        return "bg-yellow-400"
    }, [level])

    return <div className="p-md rounded-xl flex w-full text-sm text-gray gap-2 hover:bg-gray hover:text-colored group-enabled:group-active:scale-90 transition-transform">
        <Icon className="icon-sm" />
        <span className="font-semibold">
            {label}
        </span>
        <div className="grow" />
        <div className="flex flex-center">
            <div className={`w-2 h-2 rounded-full ${color}`} />
        </div>
    </div>
}
