"use client";
import useQnA from "@/hooks/useQna";
import Image from "next/image";
import React, { useState } from "react";

const MONGODB = () => {
  const { allQnA, loading } = useQnA();
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  return (
    <div className=" flex flex-col gap-4 p-2 ">
      <div className="bg-white p-2 text-center md:w-[30%] mx-auto font-semibold flex flex-col items-center justify-center rounded-lg">
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS3 Badge"
          width={160} 
          height={40} 
          className="rounded-md"
        />
        <p>click on the question to see answer</p>
        
      </div>
      {loading ? (
        <p className="flex justify-center items-center text-[#ff7777]">
           <span className="loading loading-ball loading-lg min-h-screen"></span>
        </p>
      ) : (
        allQnA
          ?.filter((filteredQna) => filteredQna.qtype === "MONGODB")
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

export default MONGODB;
