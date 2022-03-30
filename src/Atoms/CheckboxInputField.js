import React from "react";
import { useState } from "react";
import "./RadioAndCheckboxInputField.css";

function CheckboxInputField({ options, name, onChangeFunction, value }) {
  const [checkboxData, setCheckboxData] = useState(value);

  const handleChangeForCheckboxField = (e) => {
    setCheckboxData((prevValues) => {
      const indexOfCurrValue = prevValues.indexOf(e.target.value);
      if (indexOfCurrValue > -1) {
        prevValues.splice(indexOfCurrValue, 1);
      } else {
        prevValues.push(e.target.value);
      }
      return prevValues;
    });
    onChangeFunction({ key: name, value: checkboxData });
  };

  return (
    <div className="radioAndCheckboxInputFieldContainer">
      {options.map((option, idx) => {
        return (
          <div className="radioAndCheckboxInputField" key={idx}>
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={handleChangeForCheckboxField}
              checked={checkboxData.includes(option)}
            />
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default CheckboxInputField;
