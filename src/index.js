module.exports = function getZerosCount(number) {
  let count = 0;
  while(number >= 5){
    count += Math.trunc(number / 5);
    number = Math.trunc(number / 5);
  }
  return count;
}
