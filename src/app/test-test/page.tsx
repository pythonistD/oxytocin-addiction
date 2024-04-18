'use client'

import {QuestionCardRadio, QuestionCardCheckbox} from "../ui/test/question-cards";
import Image from "next/image";
import TestForm from "../ui/test/test-form";
import {useState} from "react";
import { create } from "domain";
import { createContext, useContext } from "react";
import { parseTestData, Option , testData} from "../data-samples/test-data";
import { TestContext, useTestContext } from "./testContext";
import { SubmitTestBtn, SubProps } from "./submit-test";
import { UserContext } from "../profile/userContext";
import { user } from "../data-samples/user-data";

interface OptionState{
  q_id: number,
  op_id: number,
  op_value: string,
  checked: boolean
}

export default function TestPage(){
    const [questions, options] = parseTestData(testData);
    const initial_ops = options;
    return (
      <UserContext.Provider value={user}>
        <TestContext.Provider value={
        options.map(
            (op) => useState(op.checked)
        )
        }>
        <div className="flex flex-col items-start self-stretch  max-md:px-5 p-10 bg-[#F4F7F5] gap-6">
        <div className=" text-black text-2xl p-6">
          Personality Test
        </div>
        <div className="flex flex-col self-stretch p-2.5 max-md:max-w-full gap-6">
            {questions.map(
              (q) => 
                    q.type == 'radio'? <QuestionCardRadio question={q.question} options={q.options}/> :
                <QuestionCardCheckbox question={q.question} options={q.options}/>
            
            )}
        </div>
        <SubmitTestBtn option={initial_ops} />
      </div>
      </TestContext.Provider>
  </UserContext.Provider>
    )
}