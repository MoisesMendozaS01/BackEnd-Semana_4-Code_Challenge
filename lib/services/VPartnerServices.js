class VPartnerService{
    static getAllVPartners(students){
        return students
    }
    static getEmailPartnersCert(students,option){
        const HCertification = students.filter(students => students.haveCertification=option);
        return HCertification.map(alumnos => alumnos.email)
    }
    static getNamePartnersCredits(students,credit){
        const namePartners = students.filter(student => student.credits>credit)
        return namePartners.map(nameP => nameP.name)
    }
}
module.exports = VPartnerService;