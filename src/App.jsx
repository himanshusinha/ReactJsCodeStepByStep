import { useState, useTransition } from "react";
import "./css/style.css";
function App() {
  const [pending, setPending] = useTransition();
  const handleSubmit = () => {
    setPending(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <div>
      <h1>useTransition Hook in ReactJS 19</h1>
      {pending ? (
        <img
          style={{ width: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        />
      ) : null}
      <br />
      <button disabled={pending} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
