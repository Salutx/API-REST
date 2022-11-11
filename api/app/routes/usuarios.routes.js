const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth');

const UsuariosController = require('../controllers/usuarios-controller');
const upload = require('../middleware/upload.js');

router.get('/', UsuariosController.getUsuarios);
router.post('/register', upload, UsuariosController.postUsuarios);
router.post('/login', UsuariosController.loginUser);
router.get('/:id', UsuariosController.getUniqueUsuarios, Auth.required);
router.patch('/update', UsuariosController.patchUsuarios, Auth.required);
router.delete('/delete', UsuariosController.deleteUsuarios, Auth.required);

module.exports = router;