import { useEffect, useState } from "react";

const Button = ({ onClick, btnText, color ="bg-pink-500", width ="w-[300px]" }) => {
  const [isPopping, setIsPopping] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsPopping(!isPopping);
    }, 400);
  }, [isPopping]);
  return (
    <button
      className={`rounded-md ${color} ${width} cursor-pointer py-2 px-8 text-white text-base font-medium text-center shadow-2xl ${
        isPopping ? "pop" : ""
      }`}
      onClick={() => onClick()}
    >
      {btnText}
    </button>
  );
};
export default Button;
