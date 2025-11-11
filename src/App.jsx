import { useState } from "react";
import "./css/style.css";
function App() {
  const [data, setData] = useState({
    name: "Anil",
    address: {
      city: "Delhi",
      country: "India",
    },
  });
  const handleData = (val) => {
    data.name = val;
    setData({ ...data });
  };
  const handleCity = (city) => {
    console.log(city);
    data.address.city = city;
    setData({ ...data, address: { ...data.address } });
  };
  return (
    <div>
      <h1>Updating Objects in ReactJS 19</h1>
      <input
        type="text"
        placeholder="Entery name"
        onChange={(event) => handleData(event.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
      <input type="text" onChange={(event) => handleCity(event.target.value)} />
    </div>
  );
}
export default App;
