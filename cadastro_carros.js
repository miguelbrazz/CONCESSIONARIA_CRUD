const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'concessionaria'
}

function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM carros";
    cliente.query(sql,
        (err, res) => {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let carros = res.rows;
                callback(undefined, carros);
            }
            cliente.end();
        }
    )
}


function adicionar(carro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO carros (modelo, marca, preco) VALUES ($1, $2, $3) RETURNING *";
    const values = [carro.modelo, carro.marca, carro.preco];

    cliente.query(sql, values, (err, res) => {
        if(err) {
            callback(err, undefined)
        }
        else if (res.rows && res.rows.length > 0) {
            let carro = res.rows[0];
            callback(undefined, carro);
        }
        cliente.end();        
    })
}


function atualizar(id, carro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE carros SET modelo=$1, marca=$2, preco=$3 WHERE id=$4 RETURNING *"
    const values = [carro.modelo, carro.marca, carro.preco, id];

    cliente.query(sql, values, (err, res) => {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let carro = res.rows[0];
            callback(undefined, carro);
        }
        else {
            const error = "Carro não encontrado...";
            callback(error, undefined);
        }
        cliente.end();        
    })
}


function buscarPorMarcaId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = 'SELECT * FROM carros WHERE id=$1';
    const values = [id];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            } 
            else if (res.rows && res.rows.length > 0) {
                let carro = res.rows[0];
                callback(undefined, carro);
            }
            else {
                const error = "Carro não encontrado...";
                callback(error, undefined);
            }
            cliente.end();
        }
    )
}


function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM carros WHERE id=$1 RETURNING *"
    const values = [id];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let carro = res.rows[0];
            callback(undefined, carro);
        }
        else {
            const error = "Carro não encontrado...";
            callback(error, undefined);
        }
        cliente.end();        
    })

}

module.exports = {
    adicionar, listar, atualizar, buscarPorMarcaId, deletar
    }