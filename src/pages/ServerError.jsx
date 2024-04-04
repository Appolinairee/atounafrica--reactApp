import React from "react";
import { Link } from "react-router-dom";

const ServerError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">505 - Server Error</h1>
      <p className="text-lg text-gray-600 mb-8">An unexpected error occurred on the server.</p>
      <Link to="/" className="text-blue-500 hover:underline">Go back to home</Link>
    </div>
  );
};

export default ServerError;