const express = require('express');
const router = express.Router();
const HomeControllers = require('../controllers/HomeControllers');
const techFormcontroller = require('../controllers/techFormcontroller');
const techFormdatacontroller = require('../controllers/techFormdatacontroller');
 


router.get('/', HomeControllers); 
router.get('/api/users/tech/form/data', techFormdatacontroller);
router.post('/users/tech/form', techFormcontroller);

module.exports = router


