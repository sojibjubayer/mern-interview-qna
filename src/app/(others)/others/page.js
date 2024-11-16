"use client";
import useQnA from "@/hooks/useQna";
import { TbHandClick } from "react-icons/tb";
import React, { useState } from "react";
export const dynamic = "force-dynamic";
const Others = () => {
//   const { allQnA, loading } = useQnA();
//   const [expandedQuestionId, setExpandedQuestionId] = useState(null);

//   const toggleAnswer = (id) => {
//     setExpandedQuestionId(expandedQuestionId === id ? null : id);
//   };

  return (
    <div className=" bg-white min-h-screen  pt-4">
        <p className="bg-orange-200 p-2 rounded-md w-36 mb-2">7 React Hooks: </p>
        <span className="bg-orange-100  px-1 rounded-sm">useState:</span> useState adds state to functional components.It returns the current state and a function to update it. <br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useEffect:</span> useEffect handles side effects like data fetching or updating the DOM. It runs after every render,but we can control it runs by passing dependencies. <br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useContext:</span>useContext: useContext accesses global data or shared state without the need for prop drilling. This is particularly useful for sharing global state or data that needs to be accessible to multiple components without manually passing it down. <br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useReducer:</span>useReducer: useReducer hook in React is a powerful way to manage state in functional components, especially when dealing with complex state logic or when the next state depends on the previous state. It is similar to useState,
         but instead of a single value, it uses a reducer function to update the state based on dispatched actions. <br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useRef:</span>useRef: useRef allows us to access DOM elements or persists 
        values across renders without causing a re-render.<br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useMemo:</span>useMemo: useMemo optimizes performance by memorizing a 
        calculation,ensuring it only recalculates when dependencies change.useMemo caches the calculation result and only recalculates
         when dependency changes.<br /> <br />
        <span className="bg-orange-100  px-1 rounded-sm">useCallback:</span>useCallback: useCallback memorizes functions,preventing
         them from being recreated unnecessarily.

    </div>
  );
};

export default Others;
