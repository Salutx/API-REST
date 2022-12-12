const express = require('express');
const router = express.Router();

const AssetsController = require('../controllers/categorys-controller');

router.post('/login', AssetsController.login);
router.get('/usertypes', AssetsController.getUserTypes);
router.get('/userdetails/:id', AssetsController.getUserDetails);

module.exports = router;