const  VPartnerController = require('./../../lib/controllers/VPartnerController');

describe('Unit test for VPartners Controller',()=>{
    test('Part 1: Prueba de unidad para getStudents',()=>{
        const students = VPartnerController.getAllVPartners();
        expect(students).not.toBeUndefined();
    })
})