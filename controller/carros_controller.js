const carroNegocio = require('../negocio/carros_negocio.js')


exports.listar = (req, res) => {
    carroNegocio.listar((err, carro) => {
        if(err) {
            res.status(err.numero).json({erro: err.mensagem});
        }
        else {
            res.json(carro);
        }
    })
}


exports.adicionar = (req, res) => {
    const carro = req.body;

    carroNegocio.adicionar(carro, (err, carroInserido) => {
        if(err){
            res.status(err.numero).json({erro: err.mensagem});
        }
        else {
            res.status(201).json(carroInserido);
        }
    })
}


exports.atualizar = (req, res) => {
    const id = req.params.id;
    const carro = req.body;
    carroNegocio.atualizar(id, carro, (err, carroAlterado) => {
        if(err){
            res.status(err.numero).json({erro: err. mensagem});
        }
        else {
            res.json(carroAlterado);
        }
    })
}


exports.buscarPorMarcaId = (req, res) => {
    const id = req.params.id;

    carroNegocio.buscarPorMarcaId(id, (err, carro) => {
        if(err){
            res.status(err.numero).json({erro: err.mensagem});
        }
        else {
            res.json(carro);
        }
    })
}


exports.deletar = (req, res) => {
    const id = req.params.id;
    carroNegocio.deletar(id, (err, carro) => {
        if(err){
            res.status(err.numero).json({erro: err.mensagem});
        }
        else {
            res.json(carro);
        }
    })
}