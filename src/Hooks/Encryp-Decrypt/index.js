import { Encrypt } from "./Encrypt";
import { Decrypt } from "./Decrypt";

function encryptText(text, options, setResult, setLoading) {
  setLoading(true)
  setTimeout(() => {
    setResult(Encrypt(text, options));
    setLoading(false);
  }, 2000)
}

function decryptText(text, options, setResult, setLoading) {
  setLoading(true)
  setTimeout(() => {
    setResult(Decrypt(text, options));
    setLoading(false);
  }, 2000)
}

export { encryptText, decryptText };