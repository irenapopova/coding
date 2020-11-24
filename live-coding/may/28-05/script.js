exports.sum = (x, y) => x + y;
exports.sub = (x, y) => x - y;

exports.multi = (x, y) => x * y;
exports.prepareString = (str) => {
  let newArray = str.map((x) => {
    let fixedWord = x.trim();
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });
  console.log(newArray.join(" ").replace(/[^a-zA-Z ]/g, ""));
};
