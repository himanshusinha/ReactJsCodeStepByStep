import { useId } from "react";
import "./css/style.css";

function App() {
  return (
    <div>
      <UserForm />
      <hr />
      <UserForm />
    </div>
  );
}
function UserForm() {
  const name = useId();
  const email = useId();
  const password = useId();
  const terms = useId();
  return (
    <div>
      <form action="">
        <label htmlFor={name}>Enter User Name</label>
        <input type="text" placeholder="Enter user name" id={name} />
        <br />
        <br />
        <label htmlFor={email}>Enter User Name</label>
        <input type="email" placeholder="Enter user email" id={email} />
        <br />
        <br />
        <label htmlFor={password}>Enter User Name</label>
        <input
          type="password"
          placeholder="Enter user password"
          id={password}
        />
        <br />
        <br />
        <input type="checkbox" value="Terms and Condition" id={terms} />
        <label htmlFor={terms}>Terms and Condition</label>
      </form>
    </div>
  );
}

export default App;
