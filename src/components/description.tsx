import { AiFillMessage } from "react-icons/ai"
import { ColoredTextButton } from "./button"

export function Description() {

    return <div className="bg-white p-4 rounded-xl w-[600px] shadow-md">
        <div className="p-md rounded-xl bg-contrast">
            <span className="text-sm text-break">
                {`I'm Victor Piamias, a Front-End developer. I am curious, I love to learn and discover new technologies !
                I graduated from 42 school in Paris. With my teammates, we completed the course in 5 months, after that we worked as freelancers for different protocols in crypto.
                My favorite technologies are the following : JS / TS / React / HTML / CSS.
                I also had the opportunity to explore many technologies that I have not fully mastered yet but on which I can perform basic tasks or train to be independent on it : Rust / Web Assembly / Solidity / The Graph`}
            </span>
        </div>
        <div className="h-4" />
        <ColoredTextButton className="w-full" icon={AiFillMessage}>
            Send me a message
        </ColoredTextButton>
    </div>
}