import { useState } from "react";
import "./css/style.css";
function App() {
  const [data, setData] = useState(["sam", "peter", "bob"]);
  const [dataDetails, setDataDetails] = useState([
    {
      name: "sam",
      age: 24,
    },
    {
      name: "peter",
      age: 33,
    },
    {
      name: "bob",
      age: 36,
    },
  ]);
  const handleData = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };
  const handleDataDetails = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails]);
  };
  return (
    <div>
      <h1>Updating Array in ReactJS 19</h1>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => handleData(e.target.value)}
      />
      {data.map((item, index) => {
        return (
          <h3 key={index}>
            <item>{item}</item>
          </h3>
        );
      })}
      <hr />
      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => handleDataDetails(e.target.value)}
      />
      {dataDetails.map((item, index) => {
        return (
          <h3 key={index}>
            <item>
              {item.name}-{item.age}
            </item>
          </h3>
        );
      })}
    </div>
  );
}
export default App;
