const path = require('path');
const HomeControllers = (req, res) => {
    res.sendFile(path.join(__dirname, './feedbackform.html'))
}
module.exports = HomeControllers;