import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Get input field value</h1>
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <br />
      <br />
      <button onClick={() => setValue("")}>Clear</button>
      <h1>{value}</h1>
    </div>
  );
}
export default App;
