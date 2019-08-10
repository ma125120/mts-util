const { compose, curry, head, first, prop } = require(`../dist/index`);

test("test fp", () => {
  const firstName = compose(
    prop("name"),
    first
  );

  expect(firstName([{ name: "test" }])).toBe(`test`);
});
