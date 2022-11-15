const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const InstituicoesController = require('../controllers/instituicoes-controller');

router.get('/', InstituicoesController.getInstituicao);
router.post('/register', InstituicoesController.postInstituicao);
router.get('/:id', InstituicoesController.getUniqueInstituicao, Auth.required);
router.patch('/update', InstituicoesController.patchInstituicao, Auth.required);
router.delete('/delete', InstituicoesController.deleteInstituicao, Auth.required);

module.exports = router;