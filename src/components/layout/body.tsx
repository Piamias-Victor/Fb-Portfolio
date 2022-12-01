import { Contacts } from "../contact";
import { Description } from "../description";
import { Resume } from "../resume";
import { Skills } from "../skills";
import { Stack } from "../stacks";

export function Body() {
    return <div className="w-full xl:flex">
        <div className="hidden xl:flex w-[420px] flex-col items-center">
            <Stack />
        </div>
        <div className="grow px-4 flex flex-col items-center">
            <div className="max-w-[630px]">
                <Resume />
                <div className="h-[34px]" />
                <Description />
            </div>
        </div>
        <div className="hidden xl:flex w-[420px] flex flex-col items-center">
            <div className="w-full flex flex-col items-center h-[335px]">
                <Contacts />
            </div>
            <Skills />
        </div>
        <div className="h-[34px]" />
        <div className="flex flex-center">
            <div className="xl:hidden max-w-[630px] grow flex flex-col">
                <Stack />
                <div className="h-[34px]" />
                <Contacts />
                <div className="h-[34px]" />
                <Skills />
            </div>
        </div>
    </div>
}