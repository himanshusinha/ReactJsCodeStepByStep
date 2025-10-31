import "./App.css";
import React, { useState } from "react";
function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h1>Toggle in React JS</h1>
      <h2>{show ? "Himanshu Sinha" : null}</h2>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}
export default App;
