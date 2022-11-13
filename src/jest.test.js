const math = require("./math");
const { sum } = math();

describe("Teste de função simples math.js", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBe(-3);
  });
});
