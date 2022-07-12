const express = require('express');
const rota = express.Router();

const carroController = require('../controller/carros_controller.js');

//Listar
rota.get('/', carroController.listar);

//Adicionar
rota.post('/', carroController.adicionar);

//Atualizar
rota.put('/:id', carroController.atualizar);

//BuscarPorMarcaId
rota.get('/:id', carroController.buscarPorMarcaId);

//Deletar
rota.delete('/:id', carroController.deletar);

module.exports = rota;