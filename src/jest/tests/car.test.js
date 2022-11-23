import car from "../examples/car";

describe("Teste de comparação de valores com objeto", () => {
  test("O objeto esperado deve ser type:'Fiat', model:'500', color:'white'", () => {
    expect(car).toEqual({ type: "Fiat", model: "500", color: "white" });
  });
});
