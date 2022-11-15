import math from "./math";
const { sum } = math();
import car from "./car";
import shopping from "./shopping";

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
describe("Teste de comparação com string", () => {
  test("Existe a palavra uva dentro da palavra chuva", () => {
    expect("chuva").toMatch(/uva/);
  });
});

//toContain verifica item em um vetor
describe("Teste de comparação com vetor", () => {
  test("the shopping list has milk on it", () => {
    expect(shopping).toContain("supermercado");
  });
});
