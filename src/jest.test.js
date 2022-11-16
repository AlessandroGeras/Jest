import math from "./math";
const { sum } = math();
import car from "./car";
import shopping from "./shopping";
import error from "./error";
import hello from "./hello";

//Comparativos comuns
describe("Teste de comparação de valores - math.js", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBe(-3);
    expect(sum(-4, 1)).not.toBe(3);
    expect(sum(-4, 1)).toBeGreaterThan(-4);
    expect(sum(-4, 1)).toBeGreaterThanOrEqual(-3);
    expect(sum(-4, 1)).toBeLessThan(-2);
    expect(sum(-4, 1)).toBeLessThanOrEqual(-1);
  });
});

//toEqual verifica todos os campos de um objeto
describe("Teste de comparação de valores com objeto - vector.js", () => {
  test("O objeto esperado deve ser type:'Fiat', model:'500', color:'white'", () => {
    expect(car).toEqual({ type: "Fiat", model: "500", color: "white" });
  });
});

//toBeTruthy verifica se o campo é verdadeiro
describe("Teste de comparação com boleano", () => {
  test("Os objetos testados devem ser verdadeiros", () => {
    const boleanoOne = true;
    const boleanoTwo = 1;
    expect(boleanoOne).toBeTruthy();
    expect(boleanoTwo).toBeTruthy();
  });
});

//toMatch comparativo de string
describe("Teste de compacomparativo de stringração com string", () => {
  test("Existe a palavra uva dentro da palavra chuva", () => {
    expect("chuva").toMatch(/uva/);
  });
});

//toBeCloseTo comparativo de float
describe("Teste de comparação com float", () => {
  const decimal = 0.3;
  expect(decimal).toBeCloseTo(0.3);
});

//toContain verifica item em um vetor
describe("Teste de comparação com vetor", () => {
  test("A lista de shopping possui o item supermercado", () => {
    expect(shopping).toContain("supermercado");
  });
});

//toThrow verifica se um erro (throw) foi recebido
describe("Teste de comparação com throw - error.js", () => {
  test("Verifica se o erro foi recebido", () => {
    expect(() => error()).toThrow();
  });
});

//beforeAll é um hook executado antes de todos os testes
//beforeEach é um hook executado antes de cada teste
beforeAll(() => {
  let describe = "Executa a função hello - hello.js";
  hello();
});
