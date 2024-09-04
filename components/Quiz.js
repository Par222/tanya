"use client";
import { useEffect, useState } from "react";
import { QuizConfig } from "@/configs/quizconfig";
import Button from "./Button";
import MessageBox from "./MessageBox";
import End from "./End";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizConfig, setQuizConfig] = useState(QuizConfig);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [proxy, setProxy] = useState(false);
  let song = null;
  const checkAns = () => {
    if (quizConfig[currentQuestion].answer.includes(currentAnswer)) {
      setIsAnswerCorrect(true);
    }
    setHasSubmitted(true);
  };
  const resetConfig = () => {
    setIsAnswerCorrect(false);
    setHasSubmitted(false);
    setCurrentAnswer("");
    setQuizConfig(QuizConfig);
    setCurrentQuestion(currentQuestion + 1);
    if (song) {
      song.pause();
      song = null;
    }
  };
  useEffect(() => {
    if (hasSubmitted) {
      let tempQUizConfig = quizConfig;
      if (!isAnswerCorrect) {
        tempQUizConfig[currentQuestion].hint.showHint = true;
        setQuizConfig(tempQUizConfig);
        setProxy(!proxy);
      } else {
        if (tempQUizConfig[currentQuestion].personal_msg.should_play_audio) {
          song = new Audio(tempQUizConfig[currentQuestion].personal_msg.audio);
          song.play();
        }
      }
    }
  }, [hasSubmitted, isAnswerCorrect]);
  return (
    <>
      {currentQuestion < quizConfig.length ? (
        <div className=" flex flex-col py-10 px-4 justify-center items-center">
          <img src="/images/note.jpg" height={300} width={300}></img>
          {quizConfig && quizConfig[currentQuestion] && (
            <div className="w-[240px] translate-y-[-350px] flex flex-col space-y-5 justify-center items-center">
              <p className="font-mono">
                {currentQuestion + 1}. {quizConfig[currentQuestion].question}
              </p>
              {!quizConfig[currentQuestion].hint.showHint && (
                <Button
                  width="w-[200px]"
                  color="bg-red-300"
                  btnText={"Take a hint"}
                  onClick={() => {
                    let tempQUizConfig = quizConfig;
                    tempQUizConfig[currentQuestion].hint.showHint = true;
                    setQuizConfig(quizConfig);
                    setProxy(!proxy);
                  }}
                ></Button>
              )}
              {quizConfig[currentQuestion].hint.showHint && (
                <p className="text-sm font-semibold text-center italic">
                  Hint : {quizConfig[currentQuestion].hint.text}
                </p>
              )}
            </div>
          )}
          <div className="w-[100%] translate-y-[-160px] flex flex-col justify-center items-center">
            <p className="text-lg py-3 text-pink-500 font-sans font-semibold italic ">
              Hey comment your answer here !!!
            </p>
            <input
              className="bg-transparent border-2 border-b-pink-600 w-full mb-5 focus:outline-none text-lg text-center"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
            ></input>
            <button
              className="text-base bg-pink-500 text-white px-10 py-1 rounded-md w-[60%] mb-3"
              onClick={() => checkAns()}
            >
              Submit
            </button>
            {isAnswerCorrect ? (
              <p className="my-2 text-base text-pink-500 font-semibold font-serif">
                Yay that's a correct guess
              </p>
            ) : hasSubmitted ? (
              <p className="my-2 text-base text-pink-500 font-semibold font-serif">
                Oops that's a wrong guess{" "}
              </p>
            ) : null}
            {isAnswerCorrect && (
              <>
                {quizConfig[currentQuestion].personal_msg.should_play_video && (
                  <video
                    width="350"
                    height="300"
                    controls
                    className="my-5"
                    autoPlay={
                      quizConfig[currentQuestion].personal_msg.should_play_video
                    }
                  >
                    <source
                      src={quizConfig[currentQuestion].personal_msg.video}
                      type="video/mp4"
                    />
                  </video>
                )}
                <MessageBox
                  keyVal={currentQuestion}
                  msg={quizConfig[currentQuestion].personal_msg.text}
                  msgClass=" border-[1.5px] border-pink-400"
                ></MessageBox>
                <div className="flex justify-end items-end w-full my-4">
                  <button
                    className="px-[16px] py-3 bg-pink-500 rounded-full"
                    onClick={() => resetConfig()}
                  >
                    <img src="/images/next.svg" height={16} width={16}></img>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <End></End>
        </div>
      )}
    </>
  );
};
export default Quiz;
