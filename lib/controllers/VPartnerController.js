const VPartnerServices = require('./../services/VPartnerServices');

const Reader = require('./../../lib/utils/Reader');
const vpartners = Reader.readJsonFile("./visualpartners.json");

class VPartnerController{
    static getAllVPartners(){
        return VPartnerServices.getAllVPartners(vpartners)
    }
    static getEmailPartnersCert(option){
        return VPartnerServices.getEmailPartnersCert(vpartners,option)
    }
}

module.exports = VPartnerController;