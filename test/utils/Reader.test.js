const Reader = require("./../../lib/utils/Reader");

describe("Unit Test for Reader class",()=>{
    test("Parte 1: metodo readJsonFile",()=>{
        const explorers = Reader.readJsonFile("./visualpartners.json");
        expect(explorers).not.toBeUndefined();
    });
});