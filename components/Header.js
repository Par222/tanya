import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
const Header = ({ msgList = [], imgLink }) => {
    const [msgClass, setMsgClass] = useState('')
    useEffect(()=>{
     
    },[])
  return (
    <div className="w-full max-h-[30%] flex flex-col py-10 space-y-5 justify-center items-center">
      <div className="w-[400px] h-full flex items-center justify-center">
        <img
          className="rounded-full"
          src={imgLink}
          height={300}
          width={300}
        ></img>
      </div>
      {msgList.map((msg, index) => {
        return (
          <div className="flex flex-col space-x-4 justify-center items-center">
            <MessageBox msg={msg} keyVal={index} msgClass ={msgClass}></MessageBox>
          </div>
        );
      })}
    </div>
  );
};
export default Header;
