import React from "react";
import { useState } from "react";

export const Home = () => {
  const [quote, setQuote] = useState({});

  const fetchQuote = () => {
    fetch("http://localhost:4000/random-quote")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  const displayQuote = () => {
    let text = quote.text;
    let author = quote.author;
    return (
      <div>
        {text} {author ? `— ${author}` : null}
      </div>
    );
  };
  console.log(quote.author);
  return (
    <div className="container mx-auto m-20 flex flex-col items-center">
      <div className="text-indigo-900 text-lg font-medium">She# + Troopl Hackathon 2021</div>
      {displayQuote()}
      <div className="flex flex-col items-center text-lg text-purple-700 text-9xl font-extrabold mt-28">
        Shoutout to you!
        <button
          type="button"
          className="inline-flex
          items-center
          px-8
          py-4
          mt-16
          border
          shadow-sm
          text-6xl
          font-semibold
          bg-yellow-300
          text-yellow-50
          rounded-md
          hover:bg-indigo-400
          text-purple-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-400
          onClick={fetchQuote}"
        >
          Send
        </button>
      </div>
    </div>
  );
};
