"use client";

import { useState } from "react";
import Button from "./Button";
import MessageBox from "./MessageBox";
import { useRouter } from "next/navigation";

const End = () => {
  const [wishClicked, setWishClicked] = useState(false);
  const [homeEnabled, setHomeEnabled] = useState(false);
  const router = useRouter();
  const msg =
    "I dont think I have more words to express about how I feel about you. I hope I was able to put a smile on your face for atleast a moment. If yes grant me a wish please";
  return (
    <div className="flex flex-col space-y-5 items-center justify-center">
      <p className="text-lg my-5 font-serif  text-pink-500 font-semibold">
        Well well someone got all the ans
      </p>
      <MessageBox msg={msg}></MessageBox>
      <Button
        btnText={"Grant the wish"}
        onClick={() => setWishClicked(true)}
      ></Button>
      {wishClicked && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-base italic my-1 text-pink-500 font-semibold w-[80%] text-center">
            {
              "I am doing all this for your enormouss wealth, kidding . Always let our bond keep growing . Never wanna lose you"
            }
            <video
              width="400"
              height="400"
              controls
              className="my-5"
              autoPlay={true}
              onEnded={() => setHomeEnabled(true)}
            >
              <source src={"/media/office.mp4"} type="video/mp4" />
            </video>
          </p>
          {homeEnabled && (
            <div className="flex flex-col justify-center items-center space-y-5">
              <p className="text-base my-5 font-serif  text-pink-500 font-semibold text-center px-5">
               I want you to close your eyes now 
              </p>
              <div className="flex items-center justify-center space-x-5">
                <Button
                  btnText={'Go to Home'}
                  width="100px"
                  onClick={() => router.push("/")}
                ></Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default End;
