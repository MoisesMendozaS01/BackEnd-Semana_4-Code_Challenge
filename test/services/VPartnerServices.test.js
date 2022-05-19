const Reader = require('./../../lib/utils/Reader');
const VPartnerService= require('./../../lib/services/VPartnerServices')

describe('Unit Test for visual partners Services',()=>{
    test('Part 1: Prueba de unidad impresion de todos los estudiantes',()=>{
        const vpartners = Reader.readJsonFile("./visualpartners.json");
        const AllPartners = VPartnerService.getAllVPartners(vpartners);

        expect(AllPartners).not.toBeUndefined();
    })
})