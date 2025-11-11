import { useState } from "react";
import "./css/style.css";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleUsers = () => {
    setUsers([...users, user]).length;
  };

  const totalUser = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUser = [...new Set(users)].length;
  return (
    <div>
      <h1>Derived State in ReactJS 19</h1>
      <h4>Total User : {totalUser}</h4>
      <h4>Last User : {lastUser}</h4>
      <h4>Total Unique User : {uniqueUser}</h4>

      <input type="text" onChange={(event) => setUser(event.target.value)} />
      <button onClick={handleUsers}>Add Users</button>
      {users.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
}
export default App;
