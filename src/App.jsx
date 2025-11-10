import { useRef } from "react";
import "./css/style.css";

function App() {
  const userRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };
  const handleSubmitRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("Ref values:", user, password);
  };
  return (
    <div>
      <h1>Uncontrolled component in ReactJS</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" id="user" />
        <br />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          id="password"
        />
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
      </form>

      <form action="" onSubmit={handleSubmitRef}>
        <input
          ref={userRef}
          type="text"
          placeholder="enter your name"
          id="userRef"
        />
        <br />
        <br />
        <input
          ref={passwordRef}
          type="password"
          placeholder="enter your password"
          id="passwordRef"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
