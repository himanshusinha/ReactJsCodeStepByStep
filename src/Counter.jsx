import { useState } from "react";

function Counter() {
  const [increaseCount, setIncreaseCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(10);

  const handleIncreaseCount = () => {
    setIncreaseCount(increaseCount + 1);
  };

  const handleDecreaseCount = () => {
    setDecreaseCount(decreaseCount - 1);
  };
  return (
    <div>
      <h1>Increase Count : {increaseCount}</h1>
      <h1>Decrease Count : {decreaseCount}</h1>
      <button onClick={handleIncreaseCount}>Increase Count</button>
      <button onClick={handleDecreaseCount}>Decrease Count</button>
    </div>
  );
}
export default Counter;
