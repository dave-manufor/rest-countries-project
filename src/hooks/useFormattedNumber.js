// This hook is used to format integers and floats with decimal and commas
const useFormattedNumber = (number) => {
  const numStr = String(number).split(",").join("");
  let tempStr = "";
  let counter = 1;
  const decimalIndex = numStr.includes(".")
    ? numStr.indexOf(".")
    : numStr.length;
  if (numStr.includes(".")) {
    for (let i = numStr.length - 1; i >= decimalIndex; i--) {
      tempStr += numStr[i];
    }
  }
  for (let i = decimalIndex - 1; i >= 0; i--) {
    tempStr += counter++ % 3 === 0 && i !== 0 ? `${numStr[i]},` : numStr[i];
  }
  return tempStr.split("").reverse().join("");
};

export default useFormattedNumber;
