const database = require('../model/TechForm');
const techFormdatacontroller = async (req, res) => {
    try {
        const data = await database.find();
        const datafilter = [];
        data.forEach((element) => {
            datafilter.push({ _id: element._id, teamName: element.teamLeaderName, teamLeaderName: element.teamLeaderName, teamLeaderMobilenumber: element.teamLeaderMobilenumber, teamLeaderRegistrationNumber: element.teamLeaderRegistrationNumber, teamLeaderEmailId: element.teamLeaderEmailId, nameMember1: element.nameMember1, registrationnumberMember1: element.registrationnumberMember1, nameMember2: element.nameMember2c, registrationnumberMember2: element.registrationnumberMember2, nameMember3: element.nameMember3, inputsectionmemberleader: element.inputsectionmemberleader, inputsectionmember1: element.inputsectionmember1, inputsectionmember2: element.inputsectionmember2, inputsectionmember3: element.inputsectionmember3, registrationnumberMember3: element.registrationnumberMember3, selectparticipant: element.selectparticipant })
        })
        res.status(200).send(datafilter);

    } catch (error) {
        console.log("Some technical issue");

    }
}
module.exports = techFormdatacontroller