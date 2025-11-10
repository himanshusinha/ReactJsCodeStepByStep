import { useRef } from "react";
import "./css/style.css";

function App() {
  const inputRef = useRef();
  const h1Ref = useRef();
  const inputHandler = () => {
    console.log("input ref value");
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter password";
    inputRef.current.value = "123";
  };
  const h1Handler = () => {
    h1Ref.current.style.color = "green";
  };
  const toggleHandler = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  return (
    <div>
      <h1>useRef in ReactJS</h1>
      <button onClick={inputHandler}>Change Value</button>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={toggleHandler}>Toggle Visibility</button>
      <h1 ref={h1Ref}>React JS</h1>
      <button onClick={h1Handler}>Change h1 Style</button>
    </div>
  );
}
export default App;
