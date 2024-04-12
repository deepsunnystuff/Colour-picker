import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, onChangeComplete }) => {
  return (
    <div>
      <SketchPicker color={color} onChangeComplete={onChangeComplete} />
    </div>
  );
};

export default ColorPicker;
