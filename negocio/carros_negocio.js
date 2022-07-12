const carroRepositorio = require('../persistencia/carros_persistencia.js')


function listar (callback) {
    carroRepositorio.listar(callback);
}


function adicionar (carro, callback) {
    if(!carro || !carro.modelo || !carro.marca || !carro.preco){
        const erro = {
            mensagem: "[ERRO] Campo modelo, marca ou preco vazios.",
            numero :400
        };
        callback(erro, undefined)
    }
    else {
        carroRepositorio.adicionar(carro, callback);
    }
}


function atualizar (id, carro, callback) {
    if (!id || isNaN(id)){
        const erro = {
            mensagem: "[ERRO] Identificador Invalido.",
            numero: 400
        }
        callback(erro, undefined)
    }
    else if(!carro || !carro.modelo || !carro.marca || !carro.preco) {
        const erro = {
            mensagem: "[ERRO] Os devidos campos devem ser preenchidos.",
            numero: 400
        }
        callback(erro, undefined)
    }
    else {
        carroRepositorio.atualizar(id, carro, callback);
    }
}


function buscarPorMarcaId(id, callback) {
    if(!id || isNaN(id)){
        const erro = {
            mensagem: "[ERRO] Identificador Invalido.",
            numero: 400
        }
        callback(erro, undefined);
    }
    else {
        carroRepositorio.buscarPorMarcaId(id, callback);
    }
}


function deletar (id, callback) {
    if(!id || isNaN(id)){
        const erro = {
            mensagem: "[ERRO] Identificador Invalido.",
            numero: 400
        }
        callback(erro, undefined);
    }
    else {
        carroRepositorio.deletar(id, callback);
    }
}


module.exports = {
    adicionar, listar, atualizar, buscarPorMarcaId, deletar
    }