const VPartnerController = require("./controllers/VPartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge welcome!"});
});
app.get("/v1/students",(request,response)=>{
    const Students = VPartnerController.getAllVPartners();
    response.json(Students);
})
app.get("/v1/students/emails",(request,response)=>{
    const emails = VPartnerController.getEmailPartnersCert("true");
    response.json({'haveCertification': true,'emails':emails})
})
app.listen(port, () => {
    console.log(`Code Challenge in localhost:${port}`);
});