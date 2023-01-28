Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i));
  }
  return newArray;
};

const array = ["one", "two", "three"];

console.log(array.map((name, index) => `[${index}]${name}`));
console.log(array.myMap((name, index) => `${name}[${index}]`));
