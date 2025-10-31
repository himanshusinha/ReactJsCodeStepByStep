import { useState } from "react";
import "./App.css";
import User from "./User";
import College from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";
function App() {
  const userObj = {
    name: "himanshu",
    age: 35,
    address: "indore",
  };
  const userObj2 = {
    name: "pooja",
    age: 32,
    address: "indore",
  };
  const userObj3 = {
    name: "dakshit",
    age: 6,
    address: "indore",
  };
  const collegeName = ["DAVV", "SGSITS", "MEDICAPS", "VAISHNAV"];

  const [student, setStudent] = useState("Himanshu");

  return (
    <div>
      <h1>Props in React Js</h1>
      {/* <User name={"Himanshu Sinha"} email={"himanshusinha011@gmai.com"} /> */}
      <User user={userObj} />
      <User user={userObj2} />
      <User user={userObj3} />

      <College collegeName={collegeName[0]} />
      <College collegeName={collegeName[1]} />

      {student && <Student name={student} />}
      <button onClick={() => setStudent("Dakshit")}>Update Name</button>

      <Wrapper>
        <h4>Hello</h4>
      </Wrapper>
      <Wrapper color="pink">
        <h4>Hello New User</h4>
      </Wrapper>
      <Wrapper color="orange">
        <h4>Hello {student}</h4>
      </Wrapper>
    </div>
  );
}
export default App;
