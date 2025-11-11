import "./css/style.css";
function App() {
  return (
    <div>
      <h1>Pure Component in ReactJS 19</h1>
      <Counter count={1} />
      <Counter count={2} />
      <Counter count={3} />
      <Counter count={4} />
    </div>
  );
}
const Counter = ({ count }) => {
  return (
    <div>
      <h1>Counter : {count}</h1>
    </div>
  );
};
export default App;
