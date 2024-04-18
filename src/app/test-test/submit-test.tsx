import { useTestContext, TestContext } from "./testContext"
import { useContext } from "react"
import { Option } from "../data-samples/test-data"

export interface SubProps {
    option: Option[]
}

export function SubmitTestBtn({option}: SubProps) {
    const context = useTestContext(useContext(TestContext))
    return (
        <button type="button" onClick={
            () => {
                console.log(parseAnswers(option, context.map(
                    (val) => val[0]
                )))
            }
        } className="p-4 bg-[#2596be] rounded-3xl">Submit </button>
    )
}

function parseAnswers(avaliable_options: Option[], optionStates: boolean[]){
    for(let i = 0; i < optionStates.length; i++){
        avaliable_options[i].checked = optionStates[i];
    }
    return avaliable_options;
}