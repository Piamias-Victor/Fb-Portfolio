import { Description } from "../description";
import { Resume } from "../resume";
import { Stack } from "../stacks";

export function Body() {
    return <div className="w-full flex">
        <div className="w-[420px] flex flex-col items-center">
            <Stack />
        </div>
        <div className="grow flex flex-col items-center">
            <Resume />
            <div className="h-[34px]" />
            <Description />
        </div>
        <div className="w-[420px]">

        </div>
    </div>
}