import { ReactNode, Ref } from "react"
import { ElementHandle } from "./element"

export type DivisionProps = JSX.IntrinsicElements["div"]
export type ButtonProps = JSX.IntrinsicElements["button"]
export type VectorProps = JSX.IntrinsicElements["svg"]
export type AnchorProps = JSX.IntrinsicElements["a"]

export interface ChildrenProps {
    children?: ReactNode
}

export interface CloseProps {
    close(): void
}

export interface OkProps<T> {
    ok(x: T): void
}

export interface RefProps<T = HTMLElement> {
    xref?: Ref<T>;
}

export interface TargetProps<T extends Element = Element> {
    target: ElementHandle<T>;
}