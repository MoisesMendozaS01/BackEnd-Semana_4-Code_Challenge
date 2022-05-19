const  VPartnerController = require("./../../lib/controllers/VPartnerController");

describe("Unit test for VPartners Controller",()=>{
    test("Part 1: Prueba de unidad para getStudents",()=>{
        const students = VPartnerController.getAllVPartners();
        expect(students).not.toBeUndefined();
    });
    test("Part 2: Prueba de unidad para getEmailPartnersCert",()=>{
        const emails = VPartnerController.getEmailPartnersCert("true");
        expect(emails).toContain("Todd@visualpartnership.xyz");
    });
    test("Part 3: Prueba de unidad para getNameByCredits",()=>{
        const name = VPartnerController.getNameByCredits(500);
        expect(name).toContain("Warren");
    });
});