
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
test("jugador 1 escoge piedra y jugador 2 escoge spock",()=>{
  expect (compara(0,0)).toBe("no me leas la mente");
});

// si jugador a escoge papel
test("jugador 1 escoge papel y jugador 2 escoge piedra",()=>{
  expect (compara(1,0)).toBe("gana papel");
});
test("jugador 1 escoge papel y jugador 2 escoge tijeras",()=>{
  expect (compara(1,2)).toBe("gana piedra");
});
test("jugador 1 escoge papel y jugador 2 escoge lagarto",()=>{
  expect (compara(1,3)).toBe("gana lagarto");
});
test("jugador 1 escoge papel y jugador 2 escoge spock",()=>{
  expect (compara(1,4)).toBe("gana spock");
});
test("jugador 1 escoge papel y jugador 2 escoge papel",()=>{
  expect (compara(1,1)).toBe("no me leas la mente");
});

// si jugador a escoge tijera
test("jugador a escoge tijeras y jugador b escoge piedra",()=>{
  expect (compara(2,0)).toBe("gana piedra");
});
test("jugador a escoge tijeras y jugador b escoge papel",()=>{
  expect (compara(2,1)).toBe("gana tijeras");
});
test("jugador a escoge tijeras y jugador b escoge tijeras",()=>{
  expect (compara(2,2)).toBe("no me leas la mente"); 
});
test("jugador a escoge tijeras y jugador b escoge lagarto",()=>{
  expect (compara(2,3)).toBe("gana tijeras");
});
test("jugador a escoge tijeras y jugador b escoge spock",()=>{
  expect (compara(2,4)).toBe("gana spock");
})
