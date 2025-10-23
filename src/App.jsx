import "./App.css";
function App() {
  const userObj = {
    name: "John Doe",
    age: 30,
    profession: "Developer",
  };

  const userArray = ["Alice", "Bob", "Charlie"];
  let path =
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-1108099.jpg&fm=jpg";
  const name = "React Blog";
  let x = 10;
  let y = 20;

  function fruit() {
    return "Mango";
  }

  function sum(a, b) {
    return a + b;
  }

  function operation(a, b, op) {
    let result = 0;
    if (op === "+") {
      result = a + b;
    } else if (op === "") {
      result = a - b;
    } else {
      result = a * b;
    }
    return result;
  }

  return (
    <>
      <div>
        <h1>JavaScript in JSX</h1>
        <h1>{name}</h1>
        <h1>{fruit()}</h1>
        <h1>{sum(10, 20)}</h1>
        <h1>{operation(10, 20, "-")}</h1>
        <h1>{userObj.profession}</h1>
        <h1>{userArray[0]}</h1>
        <img src={path} alt="Random" width="600px" />
      </div>
    </>
  );
}
export default App;
