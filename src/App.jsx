import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("indore");
  return (
    <div>
      <h1>Handle Checkbox in ReactJS</h1>
      <h4>Select Gender</h4>
      <input
        value={"male"}
        type="radio"
        id="male"
        name="gender"
        checked={gender == "male"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="gender">Male</label>
      <input
        value={"female"}
        type="radio"
        id="female"
        name="gender"
        checked={gender == "female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="gender">Female</label>
      <h2>Selected Gender : {gender}</h2>
      <br />
      <br />
      <h4>Select City :</h4>
      <select
        defaultValue="indore"
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="indore">indore</option>
        <option value="ujjain">ujjain</option>
        <option value="dewas">dewas</option>
      </select>
      <h2>Selected City : {city}</h2>
    </div>
  );
}
export default App;
