import React from "react";
// import { Todo } from "../components/Todo";

export const Home = () => {
  return (
    <div className="container mx-auto m-20 flex flex-col items-center">
    <div className="text-indigo-500 text-base">She# Hackathon 2021</div>
      <div className="flex flex-col items-center text-lg text-yellow-500 text-9xl font-extrabold mt-20">
        Shoutout to you!
        <button
          type="button"
          className="inline-flex items-center px-8 py-4 mt-10 border shadow-sm text-6xl font-medium bg-indigo-600 text-yellow-50 rounded-md hover:bg-indigo-400 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
        >
          Send!
        </button>
      </div>
    </div>
  );
};
