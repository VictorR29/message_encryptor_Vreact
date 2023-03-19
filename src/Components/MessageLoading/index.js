import React from "react";
import { LoadingText } from "./Styles";

function MessageLoading(props) {
  return(
    <>
      <LoadingText>{props.title}ing....</LoadingText>
    </>
  )
}

export {MessageLoading}