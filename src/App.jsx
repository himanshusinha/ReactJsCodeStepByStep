import "./App.css";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      {count == 0 ? (
        "condition 0"
      ) : count == 1 ? (
        "condition 1"
      ) : count == 2 ? (
        "condition 2"
      ) : count == 3 ? (
        "condition 3"
      ) : count == 4 ? (
        "condition 4"
      ) : (
        <h1>Other Condition</h1>
      )}
    </div>
  );
}
export default App;
