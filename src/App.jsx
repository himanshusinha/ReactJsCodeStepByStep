import { useState } from "react";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });
  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const imageStyle = {
    width: "200px",
  };

  const textContainerStyle = {
    padding: "5px",
    color: textColor,
  };
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Dynamic Conditional and Inline Style in React
      </h1>
      <button onClick={() => updateTheme("gray", "green")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle</button>
      <div style={{ display: grid ? "block" : "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={imageStyle}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
