const Reader = require('./../../lib/utils/Reader');
const vpartners = Reader.readJsonFile("./visualpartners.json");

const VPartnerService= require('./../../lib/services/VPartnerServices')

describe('Unit Test for visual partners Services',()=>{
    test('Part 1: Prueba de unidad impresion de todos los estudiantes',()=>{
        const AllPartners = VPartnerService.getAllVPartners(vpartners);

        expect(AllPartners).not.toBeUndefined();
    })
    test('Part 2: Prueba de unidad email de alumnos con certificación',()=>{
        const EmailPartners = VPartnerService.getEmailPartnersCert(vpartners);
        expect(EmailPartners).toContain("Todd@visualpartnership.xyz")
    })
    test('Part 3: Prueba de unidad name de alumnos con credit mayor a 500',()=>{
        const namePartners = VPartnerService.getNamePartnersCredits(vpartners);
        expect(namePartners).toContain("Warren")
    })
})