class VPartnerService{
    static getAllVPartners(students){
        return students
    }
    static getEmailPartnersCert(students){
        const HCertification = students.filter(students => students.haveCertification===true);
        return HCertification.map(alumnos => alumnos.email)
    }
    static getNamePartnersCredits(students){
        const namePartners = students.filter(student => student.credits>500)
        return namePartners.map(nameP => nameP.name)
    }
}
module.exports = VPartnerService;