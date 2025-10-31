import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("Apple");

  const handleClick = () => {
    setFruit("Banana");
  };
  return (
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onClick={handleClick}>Change Full Name</button>
      <Counter />
    </div>
  );
}
export default App;
