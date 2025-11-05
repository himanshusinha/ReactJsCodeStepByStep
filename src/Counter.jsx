import { useEffect } from "react";

const Counter = ({ count, data }) => {
  const handleCounter = () => {
    console.log("handleCounter called");
  };

  const handleData = () => {
    console.log("handleData called");
  };

  useEffect(() => {
    handleCounter();
  }, []);

  useEffect(() => {
    handleData();
  }, [data]);

  return (
    <div>
      <h1>Counter Value :{count}</h1>
      <h1>Data Value :{data}</h1>
    </div>
  );
};

export default Counter;
