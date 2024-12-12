const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Rota para criar um novo usuário
router.post('/user', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('Usuário criado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao criar usuário');
    }
});

// Rota para listar todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Erro ao listar usuários');
    }
});

// Rota para buscar um usuário específico
router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Erro ao buscar usuário');
    }
});

module.exports = router;
