const VPartnerServices = require('./../services/VPartnerServices');

const Reader = require('./../../lib/utils/Reader');
const vpartners = Reader.readJsonFile("./visualpartners.json");

class VPartnerController{
    static getAllVPartners(){
        return new VPartnerServices(vpartners)
    }
}

module.exports = VPartnerController;