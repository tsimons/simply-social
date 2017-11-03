const thirdDigitPattern = /\B(?=(\d{3})+(?!\d))/g;
const formatNumber = (num = 1) => num.toString().replace(thirdDigitPattern, ",");
export default formatNumber;