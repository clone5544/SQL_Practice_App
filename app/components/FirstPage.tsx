import React from 'react';

const FirstPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-200 my-40">Chat with SQL Editor</h1>
        <p className="text-gray-400">
          Challenge 1: <span className="text-gray-200">Write Query to get All Students Name</span>
        </p>
      </div>

      {/* Input and Button Section */}
      <div className="w-full max-w-lg px-4">
        <div className="flex items-center p-2 bg-gray-200 rounded-full shadow-lg">
          <input
            type="text"
            placeholder="Type your SQL query..."
            className="flex-grow px-4 py-2 text-gray-700 bg-transparent border-none rounded-full focus:outline-none"
          />
          <button
            className="px-4 py-2 bg-gray-900 text-gray-300 font-semibold rounded-full hover:text-gray-200 focus:outline-none"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
