import React from "react";
import { StyledButton, CopyBtn } from "./styles";

function Button(props) {
  const btnClick = () => {
    props.onClick();
  };

  return (
    <StyledButton onClick={btnClick}>
      {props.label}
    </StyledButton>
  );
};

function CopyButton(props) {
  const btnClick = () => {
    props.onClick();
  };

  return (
    <CopyBtn onClick={btnClick} >
      {props.label}
    </CopyBtn>
  );
};

export {Button, CopyButton};