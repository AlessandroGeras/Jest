import math from "./math";
const { sum } = math();
import vector from "./vector";

//toBe verifica um resultado simples como acerto
describe("Teste de comparação de valores como acerto - math.js", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBe(-3);
  });
});

//not.toBe verifica um resultado simples como erro
describe("Teste de comparação de valores como erro - math.js", () => {
  test("A soma esperada de -4 e 1 não deve ser 3", () => {
    expect(sum(-4, 1)).not.toBe(3);
  });
});

//toEqual verifica todos os campos de um objeto
describe("Teste de comparação de valores com objeto - vector.js", () => {
  test("O objeto esperado deve ser type:'Fiat', model:'500', color:'white'", () => {
    expect(vector).toEqual({type:"Fiat", model:"500", color:"white"});
  });
});
