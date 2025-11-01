import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>
      <form action="s">
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter user name"
        />
        <br />
        <br />
        <input
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter user password"
        />
        <br />
        <br />
        <input
          value={email}
          type="text"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>

        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
export default App;
