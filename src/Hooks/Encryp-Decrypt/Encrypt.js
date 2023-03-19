function Encrypt(text, options) {
  if(options.allChecked) {
    return extreme(text);
  } else if(options.inverse) {
    return inverse(text);
  } else if(options.ascii) {
    return ascii(text);
  } else if(options.binary) {
    return binary(text);
  }
};

function inverse(text) {
  return text.split("").reverse().join("");
}

function ascii(text) {
  return text.split('').map((char) => char.charCodeAt(0)).join(' ');
}

function binary(text) {
  return text.split('').map((char) => 
  char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
}

function extreme(text) {
  let step1, step2, step3;

  step1 = inverse(text);
  step2 = ascii(step1);
  step3 = binary(step2);

  return step3;
}

export { Encrypt };