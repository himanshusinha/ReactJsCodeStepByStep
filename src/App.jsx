import "./css/style.css";
import User from "./User";

function App() {
  const display = (name) => {
    alert(name);
  };

  const getUser = () => {
    console.log("get user function called");
  };
  return (
    <div>
      <h1>Called parent component function to child component</h1>
      <User display={display} name="Himanshu" getUser={getUser} />
      <User display={display} name="Pooja" getUser={getUser} />
      <User display={display} name="Dakshit" getUser={getUser} />
    </div>
  );
}
export default App;
