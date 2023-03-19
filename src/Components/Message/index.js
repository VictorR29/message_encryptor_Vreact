import React from "react";
import { MessageText, InfoMessage } from "./Styles";

function Message(props) {
  return(
    <>
      <MessageText>{props.message || "Your message appears here:"}</MessageText>
    </>
  );
};

function InformativeMessage(props) {
  return (
    <>
      <InfoMessage>{props.message}</InfoMessage>
    </>
  );
}

export { Message, InformativeMessage };