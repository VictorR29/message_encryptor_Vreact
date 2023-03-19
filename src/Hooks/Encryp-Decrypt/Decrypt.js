function Decrypt(text, options) {
  if(options.allChecked) {
    return decryptExtreme(text);
  } else if(options.inverse) {
    return decryptInverse(text);
  } else if(options.ascii) {
    return decryptAscii(text);
  } else if(options.binary) {
    return decryptBinary(text);
  }
};

function decryptInverse(text) {
  return text.split("").reverse().join("");
};

function decryptAscii(text) {
  return text.split(' ').map((char) => String.fromCharCode(parseInt(char))).join('');
};

function decryptBinary(text) {
 return  text.split(' ').map((char) => String.fromCharCode(parseInt(char, 2))).join(''); 
};

function decryptExtreme(text) {
   let step1, step2, step3;

  step1 = decryptBinary(text);
  step2 = decryptAscii(step1);
  step3 = decryptInverse(step2);

  return step3;
};

export { Decrypt };