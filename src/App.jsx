import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
function App() {
  const [count, setCount] = useState(0); // Example for count state
  const [data, setData] = useState(0); // Example for data state

  /* 
   useEffect(()=>{
    // This code is will run on mount
    },[])

    useEffect(()=>{
    // This code is will run on update
    },[])

    useEffect(()=>{
      return()=>{
        // This code is will run on unmount
      }
    },[])

    useEffect(()=>{
      // This code will run on every life cycle event
      })
  */

  /*  Handling Dependency
      useEffect(()=>{
        // call every time
      })

      useEffect(()=>{
        // call only once
    },[])

    useEffect(()=>{
      // call on changing state
      }.[state])

    useEffect(()=>{
      // call on changing both state
      }.[state1,state2])

      useEffect(()=>{
        // call on changes props 
      }.[prop1,prop2])
  */
  const handleCounter = () => {
    console.log("handleCounter called");
  };

  useEffect(() => {
    handleCounter();
  }, []);

  const handleData = () => {
    console.log("handleData called");
  };

  useEffect(() => {
    handleData();
  }, [count, data]);
  return (
    <div>
      <h1>Handle Props Side Effect with useEffect in component</h1>
      <Counter count={count} data={data} />
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        <button onClick={() => setData(data + 1)}>Data</button>
      </div>
    </div>
  );
}

export default App;
