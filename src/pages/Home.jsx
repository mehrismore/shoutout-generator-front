import React from "react";
// import { Todo } from "../components/Todo";

export const Home = () => {
  return (
    <div className="container flex flex-col items-center text-lg text-white">
      Shoutout to YOU!
      <div className="">
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send me some love!
        </button>
      </div>
    </div>
  );
};
