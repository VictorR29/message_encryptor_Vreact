import React from "react";
import { encryptText, decryptText } from "./Encryp-Decrypt";

function useEncryptLogic() {
  const [text, setText] = React.useState("");
  const [encryptionMode, setEncryptionMode] = React.useState("encrypt");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [encodingTypes, setEncodingTypes] = React.useState({
    inverse: false,
    ascii: false,
    binary: false,
  });

  const options = {
    ...encodingTypes,
    allChecked: Object.values(encodingTypes).every((isChecked) => isChecked),
  };

  const textChange = (value) => {
    setText(value);
  }; 

  const encryptionModeChange = (value) => {
    setEncryptionMode(value);
  };

  const checkboxChange = (value, checked) => {
    setEncodingTypes(prev => ({...prev, [value]: checked}));
  };

  const btnClick = () => {
    if(encryptionMode === "encrypt") {
      encryptText(text, options, setResult, setLoading);
    } else {
      decryptText(text, options, setResult, setLoading);
    }
  };

  return {
    encryptionMode,
    encodingTypes,
    result,
    loading,
    textChange,
    encryptionModeChange,
    checkboxChange,
    btnClick,
  };
};

export { useEncryptLogic };