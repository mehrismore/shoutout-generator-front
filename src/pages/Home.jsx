import React from "react";
import { useState } from "react";

export const Home = () => {
  const [quote, setQuote] = useState({});
  
  function fetchQuote() {
    fetch('http://localhost:4000/random-quote')
      .then(res => res.json())
      .then(data => setQuote(data))
  }
  
  function displayQuote() {
      let text = quote.text;
      let author = quote.author;
      return (
          <div>{text} {author ? `— ${author}` : null}</div>
      )
  }
  console.log(quote.author);
  return (
    <div className="container mx-auto m-20 flex flex-col items-center">
    <div className="text-indigo-500 text-base">She# Hackathon 2021</div>
    {displayQuote()}
      <div className="flex flex-col items-center text-lg text-yellow-500 text-9xl font-extrabold mt-20">
        Shoutout to you!
        <button
          type="button"
          className="inline-flex items-center px-8 py-4 mt-10 border shadow-sm text-6xl font-medium bg-indigo-600 text-yellow-50 rounded-md hover:bg-indigo-400 text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          onClick={fetchQuote}
        >
          Send!
        </button>
      </div>
    </div>
  );
};
