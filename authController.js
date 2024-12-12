const express = require('express');
const { register, login } = require('../controllers/authController'); // Importa as funções de registro e login
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', register);

// Rota para fazer login de um usuário
router.post('/login', login);

module.exports = router;
