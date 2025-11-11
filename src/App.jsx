import { useState } from "react";
import AddUser from "./AddUser";
import "./css/style.css";
import DisplayUser from "./DisplayUser";
function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      <h1>Lifting State Up in ReactJS 19</h1>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
  );
}
export default App;
