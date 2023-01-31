Array.prototype.myReduce = function (callback) {
  let initalValue = this[0] ? this[0] : 0;
  for (let i = 0; i < this.length - 1; i++) {
    initalValue = callback(initalValue, this[i + 1]);
  }
  return initalValue;
};

const array = [12.5, 0.3, 0.2];
const total = array.myReduce((last, next) => last + next);

console.log(total);
