import math from "./math";
const { sum } = math();
import vector from "./vector";

//toBe verifica um resultado simples
describe("Teste de comparação de valores - math.js", () => {
  test("A soma esperada de -4 e 1 deve ser -3", () => {
    expect(sum(-4, 1)).toBe(-3);
  });
});

//toEqual verifica todos os campos de um objeto
describe("Teste de comparação de valores com objeto - vector.js", () => {
  test("O objeto esperado deve ser type:'Fiat', model:'500', color:'white'", () => {
    expect(vector).toEqual({type:"Fiat", model:"500", color:"white"});
  });
});
