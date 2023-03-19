import React from "react";
import { RadioLabel, InputRadio } from "./RadioStyles";

function RadioButton(props) {
  const inputChange = (event) => {
    props.onChange(event.target.value);
  };

  return(
    <>
      <InputRadio 
        type={props.type}
        value={props.value}
        checked={props.checked}
        onChange={inputChange}
        id={props.label}
      />
      <RadioLabel
        htmlFor={props.label}
      >
        {props.label}
      </RadioLabel>
    </>
  );
};

export { RadioButton };