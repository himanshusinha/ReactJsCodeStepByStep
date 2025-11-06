import { useEffect } from "react";

const Counter = ({ count, data }) => {
  useEffect(() => {
    // called on mounting
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    // update phase
    console.log("update phase only");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmount phase only");
    };
  }, []);
  return (
    <div>
      <h1>Counter Value :{count}</h1>
      <h1>Data Value :{data}</h1>
    </div>
  );
};

export default Counter;
