"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";


const AdminPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const qtype = form.category.value;
    const question = form.question.value;
    const answer = form.answer.value;
    const data = { qtype, question, answer };


    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add-qna`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await resp.json();

      if (res.message === "Item successfully inserted") {
        toast.success('Question added successfully')
      } else {
        toast.error("Failed to insert item.");
      }
    } catch (error) {
      console.error("Error inserting item:", error);
      toast.error("An error occurred. Please try again.");
    }

    form.reset();
  }

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="bg-green-300 w-[15%] h-screen flex flex-col gap-3 pt-3">
        <button className="btn bg-[#ff7777] text-white py-2 px-4 rounded">Add QnA</button>
        <button className="btn bg-[#ff7777] text-white py-2 px-4 rounded">Edit QnA</button>
      </div>

      {/* Main Content */}
      <div className="bg-gray-200 w-[85%] p-4">
        <div className="bg-white max-w-4xl mx-auto p-6 my-10 rounded-md shadow-md">
          <p className="text-lg md:text-xl text-center font-semibold">Add Interview Question</p>
          <form onSubmit={handleSubmit}>
            {/* Category Selection */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Select Category</label>
              <select
                id="category"
                name="category"
                required
                className="w-full border p-2 mt-1 rounded"
              >
                <option value="">--Please choose a category--</option>
                <option value="HTML5">HTML5</option>
                <option value="CSS3">CSS3</option>
                <option value="JAVASCRIPT">JavaScript</option>
                <option value="REACT">React</option>
                <option value="REDUX">Redux</option>
                <option value="NEXTJS">Next.js</option>
                <option value="NODEJS">Node.js</option>
              </select>
            </div>

            {/* Question Input */}
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
              <input
                type="text"
                id="question"
                name="question"
                required
                className="w-full border p-2 mt-1 rounded"
              />
            </div>

            {/* Answer Input */}
            <div className="mb-4">
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
              <textarea
                type="text"
                id="answer"
                name="answer"
                required
                className="w-full border p-2 mt-1 rounded h-60"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default AdminPage;
