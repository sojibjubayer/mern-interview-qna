"use client";
import useQnA from '@/hooks/useQna';
import React, { useState } from 'react';


const HTML5 = () => {
    const { allQnA, loading } = useQnA();
    console.log(allQnA)
    const [expandedQuestionId, setExpandedQuestionId] = useState(null);

    // Toggle the visibility of the answer
    const toggleAnswer = (id) => {
        setExpandedQuestionId(expandedQuestionId === id ? null : id);
    };

    return (
        <div className='h-screen flex flex-col gap-4 p-2 rounded-md'>
            <h3>HTML Interview Question and Answer</h3>
            {loading ? (
                <p>Loading...</p>
            ) : (
                allQnA?.filter(filteredQna => filteredQna.qtype === 'HTML5').map((qna, index) => (
                    <div key={qna._id} className=''>
                        <div 
                            className='bg-white p-3 cursor-pointer'
                            onClick={() => toggleAnswer(qna._id)}
                        >
                            <p>{index + 1}. {qna.question}</p>
                            {expandedQuestionId === qna._id && (
                                <p className='mt-2'>{qna.answer}</p>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default HTML5;
