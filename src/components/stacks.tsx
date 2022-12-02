import { useMemo } from "react"
import { SiC, SiCss3, SiDocker, SiEthereum, SiFigma, SiGraphql, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiRust, SiSolidity, SiTailwindcss, SiTypescript, SiWebassembly } from "react-icons/si"
import { useBoolean } from "../utils/react/boolean"
import { IconProps } from "../utils/react/icon"
import { OppositeTextButtonDeploy } from "./button"

export function Stack() {

    const deploy = useBoolean(true)

    return <div className="lg:w-full px-4">
        <div className="bg-component p-1 rounded-xl shadow-md">
            <OppositeTextButtonDeploy deploy={deploy}
                onClick={deploy.toggle}>
                My Stack
            </OppositeTextButtonDeploy>
            {deploy.current === true && <>
                <div className="h-2" />
                <Tech icon={SiJavascript} label={"JavaScript"} level />
                <Tech icon={SiTypescript} label={"TypeScript"} level />
                <Tech icon={SiReact} label={"React js"} level />
                <Tech icon={SiHtml5} label={"HTML"} level />
                <Tech icon={SiCss3} label={"CSS"} level />
                <Tech icon={SiTailwindcss} label={"Tailwind CSS"} level />
                <Tech icon={SiC} label={"C / C++"} level />
                <Tech icon={SiNodedotjs} label={"Node js"} level />
                <Tech icon={SiEthereum} label={"Ethereum"} level />
                <Tech icon={SiGraphql} label={"GraphQl"} level />
                <Tech icon={SiSolidity} label={"Solidity"} />
                <Tech icon={SiRust} label={"Rust"} />
                <Tech icon={SiWebassembly} label={"Web Assembly"} />
                <Tech icon={SiFigma} label={"Figma"} />
                <Tech icon={SiDocker} label={"Docker"} />
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

export function Tech(props: IconProps & { label: string, level?: boolean }) {

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
