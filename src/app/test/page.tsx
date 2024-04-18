import {QuestionCardRadio, QuestionCardCheckbox} from "../ui/test/question-cards";
import { testData, Question } from "../data-samples/test-data";
import Image from "next/image";
import TestForm from "../ui/test/test-form";
import {useState} from "react";

interface OptionState{
  q_id: number,
  op_id: number,
  op_value: string,
  checked: boolean
}

export default function TestPage(){
    return (
        <div className="flex flex-col items-start self-stretch  max-md:px-5 p-10 bg-[#F4F7F5] gap-6">
        <div className=" text-black text-2xl p-6">
          Personality Test
        </div>
        <div className="flex flex-col self-stretch p-2.5 max-md:max-w-full gap-6">
          < TestForm 
            children=
            {testData.map(
              (q) => 
                q.type == 'radio'? <QuestionCardRadio question={q.question} options={q.options}/> :
              <QuestionCardCheckbox question={q.question} options={q.options}/>
            )} />
          <div className="flex flex-col p-8 mt-8 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">

            <div className="text-xl text-black max-md:max-w-full">
              Select one image that you are prefer
            </div>
            <div className="flex flex-col">
              <div className="relative flex flex-row">
                <div className="flex overflow-auto gap-6">
                  <Image
                    src='/choose-1.png'
                    width={400}
                    height={500}
                    alt=""
                  />
                  <Image
                    src='/choose-2.png'
                    width={400}
                    height={500}
                    alt=""
                  />
                  <Image
                    src='/choose-0.png'
                    width={400}
                    height={500}
                    alt=""
                  />
                  <Image
                    src='/choose-1.png'
                    width={400}
                    height={500}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center p-2.5 mt-8 text-2xl text-white whitespace-nowrap bg-blue-700 rounded-xl">
          Submit
        </div>
      </div>
    )
}