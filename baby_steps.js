// Baby Steps:
var arr = [].slice.call(process.argv,2);
var sum = arr.reduce((prev,curr) => +prev + +curr);
console.log(sum);