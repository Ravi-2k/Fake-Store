import React from "react";
import { useState } from "react";

function TextInputField(props) {
  const [inputValue, setInputValue] = useState(props.value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    props.onChangeFunction({ key: e.target.name, value: e.target.value });
  };

  return (
    <input
      type="text"
      name={props.name}
      value={inputValue}
      onChange={handleChange}
      placeholder={`Enter ${props.name}`}
      className={props.classname}
    />
  );
}

export default TextInputField;
