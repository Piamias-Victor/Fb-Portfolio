import { ChildrenProps } from "../../utils/react/props";
import { Header } from "./header";

export function Layout(props: ChildrenProps) {

    const { children } = props

    return <>
        <Header />
        {children}
    </>
}