import React from "react";
import { CheckboxLabel, InputCheckbox } from "./CheckboxStyles";

function Checkbox(props) {
  const checkboxChange = (event) => {
    props.onChange(props.value, event.target.checked);
  };

  return(
    <>
      <InputCheckbox 
          type="checkbox"
          checked={props.checked}
          onChange={checkboxChange}
          id={props.label}
      />
      <CheckboxLabel
        htmlFor={props.label}
      >
        {props.label}
      </CheckboxLabel>
    </>
  );
};

export { Checkbox };