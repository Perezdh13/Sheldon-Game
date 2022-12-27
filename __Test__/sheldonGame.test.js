
const suma = require("./SheldonGame/sheldonGame.js")

test("si tijeras contra papel",()=>{
  expect (suma(2,1)).toBe("gana tijeras");
});