import College from "./College";

function App() {
  const collegeData = [
    { name: "SGSITS Indore", city: "Indore", website: "sgsit.com" },
    { name: "DAVV Indore", city: "Indore", website: "davv.com" },
    { name: "MEDICAPS Indore", city: "Indore", website: "medicaps.com" },
  ];

  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <div>
        {collegeData.map((college, index) => {
          return (
            <div key={index}>
              <College
                name={college.name}
                city={college.city}
                website={college.website}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
