"use client";
import useQnA from "@/hooks/useQna";
import { TbHandClick } from "react-icons/tb";
import React, { useState } from "react";
export const dynamic = "force-dynamic";
const FIREBASE = () => {
  const { allQnA, loading } = useQnA();
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  return (
    <div className=" flex flex-col gap-4 p-2 ">
      <div className="bg-white p-2 text-center md:w-[30%] mx-auto font-semibold flex flex-col items-center justify-center rounded-lg">
        <img
          src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
          alt="CSS3 Badge"
           className="rounded-md w-32 h-10 md:w-36 md:h-11"
        />
        <p className="flex items-center gap-2 text-sm md:text-base"><TbHandClick className="hidden md:flex"/>click on the question to see answer</p>
        
      </div>
      {loading ? (
        <p className="flex justify-center items-center text-[#ff7777]">
           <span className="loading loading-ball loading-lg min-h-screen"></span>
        </p>
      ) : (
        allQnA
          ?.filter((filteredQna) => filteredQna.qtype === "FIREBASE")
          .map((qna, index) => (
            <div key={qna._id} className="">
              <div
                className="bg-white p-3 cursor-pointer rounded-md shadow-md"
                onClick={() => toggleAnswer(qna._id)}
              >
                <p className="text-[#ff7777] font-semibold">
                  {index + 1}. {qna.question}
                </p>
                {expandedQuestionId === qna._id && (
                  <p className="mt-2">{qna.answer}</p>
                )}
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default FIREBASE;
