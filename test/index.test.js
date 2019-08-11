const { compose, curry, head, first, prop, _ } = require(`../dist/index`);

test("test fp", () => {
  const firstName = compose(
    prop("name"),
    first
  );

  expect(firstName([{ name: "test" }])).toBe(`test`);
});

test("test curry placeholder", () => {
  const getLast = curry((a, b) => {
    console.log(`参数1: ${a}`, `参数2: ${b}`);
    return b;
  });

  expect(getLast(_, 2)(1)).toBe(2);
});
