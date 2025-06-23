const usuarioService = require('../services/usuario.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

// Criar usuário
const create = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.create(req.body);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
};

// Listar todos
const encontrarTodos = async function(req, res, next) {
    try {
        const response = await usuarioService.encontrarTodos();
        res.send(response);
    } catch (error) {
        next(error);
    }
};

// Buscar por ID
const encontrarPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.encontrarPorId(req.params.id);
        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
};

// Excluir usuário por ID
const excluirPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.excluirPorId(req.params.id);
        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
};

// Pesquisar por nome
const pesquisarPorNome = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.pesquisarPorNome(req.query.name);
        res.send(response);
    } catch (error) {
        next(error);
    }
};

// Trocar senha
const trocarSenha = async function(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.trocarSenha(req.params.id, req.body.newPassword);
        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    encontrarTodos,
    encontrarPorId,
    excluirPorId,
    pesquisarPorNome,
    trocarSenha
};
