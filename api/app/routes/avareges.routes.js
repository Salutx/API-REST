const express = require('express');
const router = express.Router();

const AvaregesController = require('../controllers/avareges-controller.js');

router.get('/:id', AvaregesController.getAvareges);
router.post('/', AvaregesController.postAvarege);

module.exports = router;