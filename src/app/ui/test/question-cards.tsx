'use client';

import RadioBTN from "./radio-btn";
import CheckBox from "./checkbox";
import { testData, Question, UnParsedQuestion } from "@/app/data-samples/test-data";
import { useContext, useState } from "react";
import { TestContext, useTestContext } from "../../test-test/testContext";


function parseOption(option: string, type: ('radio' | 'checkbox')){
    var res;
    if (type == 'radio')
        res = <RadioBTN name={option}/>
    if (type == 'checkbox'){
        res = <CheckBox name={option} />
    }
    return res;
    
}


export function QuestionCardRadio({question, options}: Question){
    const options_val = useTestContext(useContext(TestContext));
    const [value, setValue] = useState<string | null>(null);
    return (
        <div className="flex flex-col items-start p-8 text-3xl text-black bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="text-xl max-md:max-w-full">
                {question}
            </div>
            {
            options.map(
                op => 
                    <div className="flex flex-row gap-2" key={op.op_id}>
                        <input type="radio" name={op.payload} value={op.payload} id={`${op.op_id}`}
                        checked={value == op.payload}
                        onChange={e => {
                            setValue(e.target.value)
                            const [val, setVal] = options_val[parseInt(e.target.id)]
                            console.log(parseInt(e.target.id))
                            setVal(e.target.checked);
                            console.log(e.target.checked);
                            }
                        } />
                        <label htmlFor={op.payload} className="text-base">{op.payload}</label>
                    </div>
            )
            }
        </div>
    )

}

export function QuestionCardCheckbox({question, options}: Question){
    const options_val = useTestContext(useContext(TestContext));
    const [value, setValue] = useState<string | null>(null);
    return (
        <div className="flex flex-col items-start p-8 text-3xl text-black bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="text-xl max-md:max-w-full">
                {question}
            </div>
            {
            options.map(
                op => 
                    <div className="flex flex-row gap-2" key={op.op_id}>
                        <input type="checkbox" name={op.payload} value={op.payload} id={`${op.op_id}`}
                        onChange={e => {setValue(e.target.value)
                            const [val, setVal] = options_val[parseInt(e.target.id)]
                            console.log(parseInt(e.target.id))
                            setVal(e.target.checked);
                            console.log(e.target.checked);}
                        } />
                        <label htmlFor={op.payload} className="text-base">{op.payload}</label>
                    </div>
            )
            }
        </div>
    )

}
