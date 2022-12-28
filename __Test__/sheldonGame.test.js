
const compara = require("./SheldonGame/sheldonGame.js")
//si jugador a escoge piedra
test("jugador 1 escoge piedra y jugador 2 escoge papel",()=>{
  expect (compara(0,1)).toBe("gana papel");
});
test("jugador 1 escoge piedra y jugador 2 escoge tijeras",()=>{
  expect (compara(0,2)).toBe("gana piedra");
});
test("jugador 1 escoge piedra y jugador 2 escoge lagarto",()=>{
  expect (compara(0,3)).toBe("gana lagarto");
});
test("jugador 1 escoge piedra y jugador 2 escoge spock",()=>{
  expect (compara(0,4)).toBe("gana spock");
});

// si jugador b escoge papel
test("jugador 1 escoge piedra y jugador 2 escoge papel",()=>{
  expect (compara(1,0)).toBe("gana papel");
});
test("jugador 1 escoge piedra y jugador 2 escoge tijeras",()=>{
  expect (compara(1,2)).toBe("gana piedra");
});
test("jugador 1 escoge piedra y jugador 2 escoge lagarto",()=>{
  expect (compara(1,3)).toBe("gana lagarto");
});
test("jugador 1 escoge piedra y jugador 2 escoge spock",()=>{
  expect (compara(1,4)).toBe("gana spock");
});