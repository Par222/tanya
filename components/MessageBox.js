const MessageBox = ({ msg, keyVal , msgClass}) => {
  return (
    <div
      key={keyVal}
      className={`w-[80%] h-full justify-center text-sm border-[1.5px] border-pink-400  text-white rounded-md bg-pink-300 py-4 px-5 italic ${msgClass}`}
    >
      {msg}
    </div>
  );
};
export default MessageBox;
