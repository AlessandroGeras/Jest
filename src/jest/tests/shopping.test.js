import shopping from "../examples/shopping";

describe("Teste de comparação com vetor", () => {
  test("A lista de shopping possui o item supermercado", () => {
    expect(shopping).toContain("supermercado");
  });
});
