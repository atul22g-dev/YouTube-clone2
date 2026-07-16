function convertToInternationalCurrencySystem(labelValue) {
  const num = Number(labelValue);
  if (isNaN(num) || num === 0) return "0";
  // Nine Zeroes for Billions
  return Math.abs(num) >= 1.0e9
    ? (Math.abs(num) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(num) >= 1.0e6
    ? (Math.abs(num) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(num) >= 1.0e3
    ? (Math.abs(num) / 1.0e3).toFixed(2) + "K"
    : Math.abs(num);
}
export default convertToInternationalCurrencySystem;
