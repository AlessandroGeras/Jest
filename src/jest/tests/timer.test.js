import cronometer from "../examples/timer";
const { timer } = cronometer();

/*
Fake timer serve para simular partes do código que precisam ser testadas sem precisar realmente rodar essas partes em tempo real.
*/
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('Aguardar 1 segundo', () => {
  timer();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});