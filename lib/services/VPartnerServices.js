class VPartnerService{
    static getAllVPartners(students){
        return students
    }
    static getEmailPartnersCert(students){
        const HCertification = students.filter(students => students.haveCertification===true);
        return HCertification.map(alumnos => alumnos.email)
    }
}
module.exports = VPartnerService;