function sum(x, y) {
  return x + y;
}

describe("Tests data type", () => {
  it("Return data type equal a Array", () => {
    const data = sum(1, 1);
    expect([data]).toBeInstanceOf(Array);
  });
});
