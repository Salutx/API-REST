const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/usuarios-controller')

router.get('/', UsuariosController.getUsuarios);
router.post('/', UsuariosController.postUsuarios);
router.get('/:id', UsuariosController.getUniqueUsuarios);
router.patch('/', UsuariosController.patchUsuarios);
router.delete('/', UsuariosController.deleteUsuarios);

module.exports = router;