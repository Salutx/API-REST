const express = require('express');
const router = express.Router();
const Auth = require('../middleare/auth')

const UsuariosController = require('../controllers/usuarios-controller');

router.get('/', UsuariosController.getUsuarios, Auth.required);
router.post('/register', UsuariosController.postUsuarios);
router.post('/login', UsuariosController.loginUser);
router.get('/:id', UsuariosController.getUniqueUsuarios, Auth.required);
router.patch('/update', UsuariosController.patchUsuarios, Auth.required);
router.delete('/delete', UsuariosController.deleteUsuarios, Auth.required);

module.exports = router;