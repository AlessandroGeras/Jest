import error from "../examples/exception";

describe("Teste de comparação com throw", () => {
  test("Verifica se o erro foi recebido", () => {
    expect(() => error()).toThrow();
  });
});
