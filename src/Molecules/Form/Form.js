import React, { useState } from "react";
import "./Form.css";
import { Button } from "react-bootstrap";
import generateObjForFormEntries from "../../Helpers/generateObjForFormEntries";
import FieldCatalogue from "./FieldCatalogue";
//have only one loading spinner at Category component
//transfer onChange logic atomwise
function Form({ formFieldDetails, submitForm, submitBtnTextContent }) {
  const [formEntriesList, setFormEntriesList] = useState(
    generateObjForFormEntries(formFieldDetails)
  );

  const handleSubmitFormDetailes = () => {
    submitForm(formEntriesList);
  };

  const handleChange = (inputData) => {
    setFormEntriesList((prevFormEntriesList) => ({
      ...prevFormEntriesList,
      [inputData.key]: inputData.value,
    }));
  };

  return (
    <div className="form">
      {formFieldDetails.map((field) => {
        const FieldComponent = FieldCatalogue[field.type];
        return (
          <div className="formField" key={field.fieldId}>
            <div className="formFieldLabel">{field.label}</div>
            <div className="formFieldInputFieldContainer">
              <FieldComponent
                key={field.fieldId}
                name={field.fieldId}
                value={formEntriesList[field.fieldId]}
                onChangeFunction={handleChange}
                classname="formFieldInputField"
                {...field?.otherProps}
              />
            </div>
          </div>
        );
      })}
      <Button
        variant="outline-dark"
        className="submitProfileFormBtn"
        onClick={handleSubmitFormDetailes}
      >
        {submitBtnTextContent}
      </Button>
    </div>
  );
}

export default Form;
