//toBeTruthy verifica se o campo é verdadeiro
describe("Teste de comparação com boleano", () => {
  test("O objeto testado deve ser verdadeiro", () => {
    const boleano = true;
    expect(boleano).toBeTruthy();
  });
});

describe("Teste de comparação com boleano", () => {
  test("O objeto testado deve ser falso", () => {
    const boleano = 0;
    expect(boleano).not.toBeTruthy();
  });
});
