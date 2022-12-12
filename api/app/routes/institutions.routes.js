const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const InstituicoesController = require('../controllers/institutions-controller');

router.get('/', InstituicoesController.getInstitutions);
router.post('/register', InstituicoesController.postInstitution);
router.get('/:id', InstituicoesController.getUniqueInstitution);
router.patch('/update', InstituicoesController.patchInstitution);
router.delete('/delete', InstituicoesController.deleteInstitution);

module.exports = router;