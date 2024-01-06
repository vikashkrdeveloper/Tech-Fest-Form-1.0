const database = require('../model/TechForm');
const techFormcontroller = async (req, res) => {
    try {
        const { teamname, teamLeaderName, teamLeaderMobilenumber, teamLeaderRegistrationNumber, teamLeaderEmailId, nameMember1, registrationnumberMember1, nameMember2, registrationnumberMember2, nameMember3, inputsectionmemberleader, inputsectionmember1, inputsectionmember2, inputsectionmember3, selectparticipant, registrationnumberMember3 } = req.body;

        if (teamname && teamLeaderName && teamLeaderMobilenumber && selectparticipant && teamLeaderRegistrationNumber && teamLeaderEmailId && nameMember1 && registrationnumberMember1 && nameMember2 && registrationnumberMember2 && nameMember3 && inputsectionmemberleader && inputsectionmember1 && inputsectionmember2, inputsectionmember3 && registrationnumberMember3) {
            const findleaderemail = await database.findOne({ teamLeaderEmailId });
            const findleadermobile = await database.findOne({ teamLeaderMobilenumber });
            const findleaderregistrationnumber = await database.findOne({ teamLeaderRegistrationNumber });
            const findmember1registrationnumber = await database.findOne({ registrationnumberMember1 });
            const findmember2registrationnumber = await database.findOne({ registrationnumberMember2 });
            const findmember3registrationnumber = await database.findOne({ registrationnumberMember3 });
            if (findleaderemail) {
                res.status(401).send('Team leader Email already exist ');

            } else {
                if (findleadermobile) {
                    res.status(402).send('Team leader mobile number already exist');

                } else {
                    if (findleaderregistrationnumber) {
                        res.status(403).send('Team leader registration number already exist');

                    } else {
                        if (findmember1registrationnumber) {
                            res.status(405).send('Team member1 registration number already exist');

                        } else {
                            if (findmember2registrationnumber) {
                                res.status(406).send('Team member2 registration number already exist');

                            } else {
                                if (findmember3registrationnumber) {
                                    res.status(408).send('Team member3 registration number already exist');

                                } else {
                                    const inserdata = new database({ teamname, teamLeaderName, teamLeaderRegistrationNumber, teamLeaderMobilenumber, teamLeaderEmailId, nameMember1, registrationnumberMember1, nameMember2, registrationnumberMember2, nameMember3, inputsectionmemberleader, inputsectionmember1, selectparticipant, inputsectionmember2, inputsectionmember3, registrationnumberMember3 });
                                    await inserdata.save();
                                    res.status(200).send('FormData done');
                                }
                            }
                        }
                    }
                }
            }

        } else {
            res.status(400).send('All field require');
        }

    } catch (error) {
        console.log("some technical issue" + error);
    }

}
module.exports = techFormcontroller;