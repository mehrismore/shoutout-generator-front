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

    if (!text) {
      return null;
    }
    return (
      <div className="inline-flex items-center px-3 mx-6 py-4 mt-6 lg:mt-10 mb-4 lg:mt-16 border shadow-sm text-xl lg:text-2xl font-medium bg-yellow-50 text-purple-400 rounded-lg">
        {text} {author ? `— ${author}` : null}
      </div>
    );
  };
  console.log(quote.author);
  return (
    <div className="container mx-auto m-10 flex flex-col items-center">
      <div className="text-indigo-900 text-md lg:text-lg font-medium">
        She# + Troopl Hackathon 2021
      </div>
      <div className="flex flex-col items-center text-center text-lg text-purple-700 text-3xl lg:text-8xl font-extrabold mt-16">
        Shoutout to you!
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10">
        {displayQuote()}
        <img alt="robot" src={robot} className="w-36 lg:w-40 bottom-36 " />
      </div>
      <button
        type="button"
        className="inline-flex items-center px-10 py-4 mt-14 border shadow-sm text-3xl lg:text-5xl font-semibold bg-yellow-300 text-purple-700 rounded-md hover:bg-indigo-400 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
        onClick={fetchQuote}
      >
        Send
      </button>
      <div className="absolute bottom-0 text-indigo-900 text-xs lg:text-lg font-normal mt-10 mb-6">
        Designed and Built by{" "}
        <a
          href="https://www.linkedin.com/in/megan-e-mccarty/"
          className="text-pink-500"
        >
          Megan
        </a>{" "}
        &{" "}
        <a
          href="https://www.linkedin.com/in/mehr-beniss/"
          className="text-pink-500"
        >
          Mehr
        </a>
      </div>
    </div>
  );
};
