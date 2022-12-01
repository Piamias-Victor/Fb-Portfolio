import { useMemo } from "react"
import { BsChevronDown } from "react-icons/bs"
import { BooleanHandle } from "../utils/react/boolean"
import { IconProps, OptionalIconProps } from "../utils/react/icon"
import { ButtonProps, RefProps } from "../utils/react/props"
import { StringHandle } from "../utils/react/string"


export function ColoredTextButton(props: ButtonProps & OptionalIconProps & RefProps<HTMLButtonElement>) {

    const { xref, icon: Icon, className, children, ...other } = props

    return <button className={`group rounded-xl p-md bg-colored text-contrast transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {Icon &&
                <Icon className="icon-xs" />}
            {children}
        </div>
    </button>
}


export function ContrastTextButton(props: ButtonProps & OptionalIconProps & RefProps<HTMLButtonElement>) {

    const { xref, icon: Icon, className, children, ...other } = props

    return <button className={`group rounded-xl p-md hover:bg-contrast transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {Icon &&
                <Icon className="icon-xs" />}
            {children}
        </div>
    </button>
}

export function OppositeTextButtonRounded(props: ButtonProps & RefProps<HTMLButtonElement>) {

    const { xref, className, children, ...other } = props

    return <button className={`group flex flex-center rounded-full p-2 bg-colored text-colored transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {children}
        </div>
    </button>
}

export function OppositeTextButtonDeploy(props: ButtonProps & RefProps<HTMLButtonElement> & { deploy: BooleanHandle }) {

    const { xref, className, children, deploy, ...other } = props

    return <button className={`w-full group flex items-center rounded-xl p-md border border-default bg-colored text-default transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex grow justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {children}
        </div>
        {
            !deploy?.current
                ? <BsChevronDown className="icon-sm flex-none text-default transition-transform duration-300" />
                : <BsChevronDown className="icon-sm flex-none text-default transition-transform rotate-180 duration-300" />
        }
    </button >
}

export function NavButton(props: IconProps & { label: string, select: boolean, section: StringHandle }) {

    const { label, icon: Icon, select, section } = props

    const color = useMemo(() => {
        if (select === true) return "text-colored"
        return "text-gray"
    }, [select])

    return <ContrastTextButton className={`flex flex-center gap-2 h-[50px] md:h-[70px] max-w-[200px] font-semibold ${color}`}
        onClick={() => section.set(label)}>
        <Icon className="hidden sm:block icon-sm md:icon-md" />
        <span className="text-xs md:text-base">{label}</span>
    </ContrastTextButton>
}