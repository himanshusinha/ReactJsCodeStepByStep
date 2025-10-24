import "./App.css";
function App() {
  function callFun() {
    alert("You clicked me!");
  }
  const fruit = (name) => {
    alert(name);
  };
  return (
    <>
      <div>
        <h1>JavaScript Click Events</h1>
        <button onClick={() => fruit("Apple")}>Apple</button>
        <button onClick={() => fruit("Banana")}>Banana</button>
      </div>
    </>
  );
}
export default App;
