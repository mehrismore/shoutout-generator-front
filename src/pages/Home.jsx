import React from "react";
import { useState } from "react";
import robot from "../assets/robot.png";

export const Home = () => {
  const [quote, setQuote] = useState({});

  const fetchQuote = () => {
    fetch("https://shoutoutgenerator.herokuapp.com/random-quote")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  const displayQuote = () => {
    let text = quote.text;
    let author = quote.author;
    return (
      <div
        className="inline-flex
          items-center
          px-8
          py-4
          mt-16
          border
          shadow-sm
          text-3xl
          font-medium
          bg-yellow-50
          text-purple-400
          rounded-lg"
      >
        {text} {author ? `— ${author}` : null}
      </div>
    );
  };
  console.log(quote.author);
  return (
    <div className="container mx-auto m-10 flex flex-col items-center">
      <div className="text-indigo-900 text-lg font-medium">
        She# + Troopl Hackathon 2021
      </div>
      <div className="flex flex-col items-center text-lg text-purple-700 text-9xl font-extrabold mt-16">
        Shoutout to you!
        <button
          type="button"
          className="inline-flex
          items-center
          px-8
          py-4
          mt-14
          border
          shadow-sm
          text-5xl
          font-semibold
          bg-yellow-300
          text-purple-700
          
          rounded-md
          hover:bg-indigo-400 text-yellow-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-400"
          onClick={fetchQuote}
        >
          Send
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-10">
        {displayQuote()}
        <img alt="robot" src={robot} width="200" />
      </div>
      <div className="text-indigo-900 text-xs font-light mt-20">
        Designed and Built by Megan & Mehr
      </div>
    </div>
  );
};
