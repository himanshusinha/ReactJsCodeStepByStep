import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  return (
    <div>
      <h1>Select your skills</h1>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">php</label>
      <br />
      <br />
      <input
        type="checkbox"
        onChange={handleSkills}
        id="javascript"
        value="javascript"
      />
      <label htmlFor="javascript">javascript</label>
      <br />
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="reactjs"
        value="reactjs"
      />
      <label htmlFor="reactjs">reactjs</label>
      <br />
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="nodejs"
        value="nodejs"
      />
      <label htmlFor="nodejs">nodejs</label>
      <h2>{skills.length > 0 ? skills.join(", ") : ""}</h2>
    </div>
  );
}
export default Skills;
