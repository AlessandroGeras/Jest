import math from "../examples/math";
const { sum } = math();

/*
test.only
Para realizar testes únicos, usar test.only para fazer que somente aquele teste rode, dando skip nos outros
*/

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBe(-3);
  });
});

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).not.toBe(3);
  });
});

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBeGreaterThan(-4);
  });
});

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBeGreaterThanOrEqual(-3);
  });
});

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBeLessThan(-2);
  });
});

describe("Teste de comparação de valores", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBeLessThanOrEqual(-1);
  });
});
