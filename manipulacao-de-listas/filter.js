Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (!callback(item)) continue;
    newArray.push(item);
  }
  return newArray;
};

const array = ["one", "two", "three"];

console.log(array.myFilter((item) => item.toLowerCase().includes("t")));
