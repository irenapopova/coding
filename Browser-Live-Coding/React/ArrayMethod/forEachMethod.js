uniqueCount = ["1", "2", "3", "4", "4", "5", "1", "2", "3", "6", "8", "9", "9", "9", "5", "8"];
let count = {};
uniqueCount.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
console.log(count);