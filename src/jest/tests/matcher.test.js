import hello from "../examples/matcher";

/*
test.only
Para realizar testes únicos, usar test.only para fazer que somente aquele teste rode, dando skip nos outros
*/

/*
beforeAll é um hook executado antes de todos os testes
beforeEach é um hook executado antes de cada teste
Também é possível definir escopos para os testes
*/
beforeAll(() => {
  describe("Executa a função hello", () => {
    hello();
  });
});

describe("Teste comparativo de string", () => {
  test("Existe a palavra uva dentro da palavra chuva", () => {
    expect("chuva").toMatch(/uva/);
  });
});

describe("Teste comparativo de float", () => {
  const decimal = 0.3;
  expect(decimal).toBeCloseTo(0.3);
});
