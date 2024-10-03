"use client";
import { useState } from "react";
import "./globals.css";

const quiz = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Green", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    question: "Which language is used to add interactivity to the web?",
    answers: ["HTML", "CSS", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What day is it today?",
    answers: ["Friday", "Thursday", "Monday", "Wednesday", "Sunday"],
    correctAnswer: "Monday",
  },
];

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleUserGuess = (answer) => {
    setSelectedAnswer(answer);
    setCurrentQuestionAnswered(true);
  };

  const getAnswerClass = (answer) => {
    if (!currentQuestionAnswered) return "bg-zinc-100 hover:bg-zinc-300";
    if (
      answer === quiz[currentQuestionIndex].correctAnswer &&
      currentQuestionAnswered
    )
      return "bg-emerald-500 text-white";
    if (answer === selectedAnswer && currentQuestionAnswered)
      return "bg-red-500 text-white";
    return "bg-zinc-100";
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentQuestionAnswered(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="text-zinc-700 w-full p-10">
      <h1 className="font-bold text-3xl mb-5">
        {quiz[currentQuestionIndex].question}
      </h1>
      <ul className="flex flex-col items-stretch gap-3">
        {quiz[currentQuestionIndex].answers.map((answer, index) => {
          return (
            <li
              onClick={() => {
                if (!currentQuestionAnswered) {
                  handleUserGuess(answer);
                }
              }}
              className={`p-3 rounded-md cursor-pointer duration-200 ${getAnswerClass(
                answer
              )}`}
              key={index}
            >
              {answer}
            </li>
          );
        })}
      </ul>
      <button
        className={`${
          !currentQuestionAnswered && "disabled-btn"
        } w-full p-3 rounded-md bg-blue-500 text-white mt-10`}
        onClick={handleNextQuestion}
        disabled={!currentQuestionAnswered}
      >
        Next
      </button>
    </div>
  );
};
export default Home;
