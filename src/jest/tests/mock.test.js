import jedi from "../examples/mock";
const axios = require("axios");

/*
Mock serve para simular partes do código que precisam ser testadas sem precisar realmente rodar essas partes. Por exemplo, testar uma API. Para isso simulamos a resposta de uma promise para de fato testar o resto do código que é mais importante
*/
//Este exemplo é um mock com Axios
test("Simulação de uma promise com Axios",async () => {
  jest.spyOn(axios,"get").mockReturnValueOnce(Promise.resolve({data:{"name":"Luke Skywalker"}}))

  const data = await jedi(1)
  expect(data.name).toEqual("Luke Skywalker")
})


//Este exemplo é um mock com Fetch
global.fetch = jest.fn().mockResolvedValue("Garota do Século 20");
describe('Simulação de uma promise com Fetch', () => {
  it('Resolvendo a Promise', async () => {
     await expect(global.fetch()).resolves.toBe("Garota do Século 20")
     console.log(global.fetch());
  })
});