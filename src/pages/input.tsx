import { useState } from "react";
import useBroadcastChannel from "../hooks/useBroadcastChannel";

const InputPage = () => {
  const [text, setText] = useState("");
  const { postMessage } = useBroadcastChannel("textChannel");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    postMessage(e.target.value);
  };

  return (
    <div>
      <h1>Input Page</h1>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default InputPage;
