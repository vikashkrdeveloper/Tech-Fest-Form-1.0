const database = require('../db/connect');
const jwt = require('jsonwebtoken');
const TechFormSchema = new database.Schema({
    teamname: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    teamLeaderName: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    teamLeaderMobilenumber: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    teamLeaderRegistrationNumber: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    teamLeaderEmailId: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    nameMember1: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    registrationnumberMember1: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    selectparticipant: {
        type: String,
        lowercase: true,
        trim: true,
        require: true

    },
    nameMember2: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    registrationnumberMember2: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    nameMember3: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    inputsectionmemberleader: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    inputsectionmember1: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    inputsectionmember2: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    inputsectionmember3: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    },
    registrationnumberMember3: {
        type: String,
        lowercase: true,
        trim: true,
        require: true
    }

}, { timestamps: true })
const TechFormModel = database.model('TechForm', TechFormSchema);
module.exports = TechFormModel;