import { AiFillMessage } from "react-icons/ai"
import { ExternalDivisionLink } from "../utils/next/anchor"
import { ColoredTextButton } from "./button"

export function Description() {

    return <div className="bg-component p-4 rounded-xl max-w-[600px] shadow-md">
        <div className="p-md rounded-xl bg-contrast">
            <span className="text-sm">
                {`I'm Victor Piamias, a Front-End developer. I am curious, I love to learn and discover new technologies !
                I graduated from 42 school in Paris. With my teammates, we completed the course in 5 months, after that we worked as freelancers for different company and more recently mainly crypto companies.
                I am currently looking for a position as a developer, I am completely autonomous on front-end missions (React / Js / Ts / HTML / CSS) but I also have a good foundation in back-end (Node js / GraphQl).`}
            </span>
        </div>
        <div className="h-4" />
        <ExternalDivisionLink href="mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other">
            <ColoredTextButton className="w-full" icon={AiFillMessage}>
                Send me a message
            </ColoredTextButton>
        </ExternalDivisionLink>
    </div>
}