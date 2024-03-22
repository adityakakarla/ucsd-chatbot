"use client";
import { useState } from "react";
import { getResponse } from "./actions";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>(
    "Your response will be here"
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setResponse("loading");
    const response = await getResponse(prompt);
    setResponse(response);
    setPrompt("");
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-24 mb-12 font-semibold">
        ucsdGPT
      </h1>
      <div className="w-screen">
        <form
          onSubmit={handleSubmit}
          className="my-6 flex flex-col items-center"
        >
          <label htmlFor="prompt" className="mb-4 text-2xl">
            Prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="best course to take if i wanna learn basic calculus?"
            className="text-white rounded-sm bg-transparent border-solid border-2 border-yellow-400 w-4/12 p-2"
          />
          <button
            type="submit"
            className="my-3 bg-blue-600 p-2 rounded-md hover:shadow-xl hover:scale-110 ease-in-out duration-500"
          >
            Submit
          </button>
        </form>
      </div>
      <p
        className={`mt-6 mx-10 md:text-lg lg:text-xl sm:w-11/12 md:w-9/12 lg:w-7/12 ${
          (response == "loading" || response == "Your response will be here") &&
          "text-center"
        }`}
      >
        {response}
      </p>
    </div>
  );
}
