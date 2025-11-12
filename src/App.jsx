import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";
import "./css/style.css";

function App() {
  const [subject, setSubject] = useState("English");
  return (
    <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="History">History</option>
      </select>
      <div style={{ backgroundColor: "yellow", padding: 10 }}>
        <h1>Context API</h1>
        <button onClick={() => setSubject("")}>Reset</button>
        <College />
      </div>
    </SubjectContext.Provider>
  );
}

export default App;
