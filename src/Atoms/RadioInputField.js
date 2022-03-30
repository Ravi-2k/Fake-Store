import React from "react";
import { useState } from "react";
import "./RadioAndCheckboxInputField.css";

function RadioInputField({ options, name, onChangeFunction, value }) {
  const handleChange = (e) => {
    onChangeFunction({ key: e.target.name, value: e.target.value });
  };

  return (
    <div className="radioAndCheckboxInputFieldContainer">
      {options.map((option, idx) => {
        return (
          <div className="radioAndCheckboxInputField" key={idx}>
            <input
              type="radio"
              name={name}
              value={option}
              onChange={handleChange}
              checked={value === option}
            />
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default RadioInputField;
