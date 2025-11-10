import { useRef } from "react";
import "./css/style.css";
import UserInput from "./UserInput";

function App() {
  const inputRef = useRef();

  const handleInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <h1>Forward Ref in React JS</h1>
      <UserInput ref={inputRef} />
      <button onClick={handleInput}>Submit</button>
    </div>
  );
}

export default App;
