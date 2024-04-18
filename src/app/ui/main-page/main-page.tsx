"use client";

import React from "react";
import Image from "next/image";
import Router, { useRouter } from "next/navigation";

export default function MainComponent() {
  return (
    <div className="p-30 bg-[#F4F7F5] flex flex-col justify-between flex-grow">
      <main className="mt-8 mb-12 flex-grow">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-[300px] bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[200px]">
              <Image
                src="/personality.png"
                alt="Colorful abstract shapes representing personality"
                fill={true}
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-[#102A43] mb-3 font-roboto">
                Personality Test
              </h2>
              <p className="text-[#486581] text-sm font-crimson-text">
                Take this test to understand your personality traits better.
              </p>
              <TestBTN btnName={"Start Test"} href="/test-test"/>
            </div>
          </div>
          <div className="w-[300px] bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[200px]">
              <Image
                src="/compass.png"
                alt="Puzzle pieces merging together representing IQ test"
                fill={true}
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-[#102A43] mb-3 font-roboto">
                IQ Test
              </h2>
              <p className="text-[#486581] text-sm font-crimson-text">
                Measure your Intelligence Quotient (IQ) with our test.
              </p>
              <TestBTN btnName={"Start Test"} href="#"/>
            </div>
          </div>
          <div className="w-[300px] bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[200px]">
              <Image
                src="/puzzle.png"
                alt="A compass pointing to various career options"
                fill={true}
              />
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-[#102A43] mb-3 font-roboto">
                Career Test
              </h2>
              <p className="text-[#486581] text-sm font-crimson-text">
                Find out which career paths align with your interests.
              </p>
              <TestBTN btnName="Start Test" href="#"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface TestBTNProps {
  btnName: string,
  href: string
}

function TestBTN({btnName, href}: TestBTNProps){
  const router = useRouter()

  const handleClick = (href: string) => {
    router.push(href)
  }


  return (
    <button className="mt-4 bg-[#334E68] text-white rounded-md px-4 py-2 font-roboto"
    onClick={() => handleClick(href)}>
      {btnName}
    </button>
  )
}
