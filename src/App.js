import { useEffect, useState } from "react";
import { SketchPicker, ChromePicker, GithubPicker } from "react-color";
import "./styles.css";
var { Alpha } = require("react-color/lib/components/common");

export default function App() {
  const [currentColor, setCurrentColor] = useState("#D0021B");
  const appStyle = {
    height: "100vh",
    color: "white",
    backgroundColor: currentColor.hex,
    transition: "ease all 300ms",
  };

  const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };
  return (
    <div className="App" style={appStyle}>
      <h1>RGB Color Picker </h1>

      <SketchPicker
        color={currentColor}
        onChangeComplete={handleChangeComplete}
      />

      <h1> Color codes: {currentColor.hex} </h1>
    </div>
  );
}
