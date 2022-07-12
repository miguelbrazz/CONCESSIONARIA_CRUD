const {Client} = require('pg');

const erroBD = {
    mensagem: "[ERRO] Motivo: Conexao no Banco de Dados",
    numero: 500
};

const erroCarroNaoEncontrado = {
    mensagem: "[ERRO] Motivo: Carro nao encontrado",
    numero: 404
};

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'concessionaria'
};

// FUNÇÃO LISTAR
function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM carros";
    cliente.query(sql,
        (err, res) => {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            }
            else {
                let carros = res.rows;
                callback(undefined, carros);
            }
            cliente.end();
        }
    )
}

// FUNÇÃO ADICIONAR
function adicionar(carro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO carros (modelo, marca, preco) VALUES ($1, $2, $3) RETURNING *";
    const values = [carro.modelo, carro.marca, carro.preco];

    cliente.query(sql, values,
        (err, res) => {
            if(err) {
                console.log(err);
                callback(erroBD, undefined)
            }
            else {
                callback(undefined, res.rows[0]);
            }
            cliente.end();        
        }
    )
}

// FUNÇÃO ATUALIZAR
function atualizar(id, carro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE carros SET modelo=$1, marca=$2, preco=$3 WHERE id=$4 RETURNING *"
    const values = [carro.modelo, carro.marca, carro.preco, id];

    cliente.query(sql, values,
        (err, res) => {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let carro = res.rows[0];
                callback(undefined, carro);
            }
            else {
                callback(erroCarroNaoEncontrado, undefined);
            }
            cliente.end();        
            }
    )
}

// FUNÇÃO BUNSCARPORMARCAID
function buscarPorMarcaId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM carros WHERE id=$1";
    const values = [id];

    cliente.query(sql, values,
        (err, res) => {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);
            } 
            else if (res.rows && res.rows.length > 0) {
                let carro = res.rows[0];
                callback(undefined, carro);
            }
            else {
                    callback(erroCarroNaoEncontrado, undefined);
            }
            cliente.end();
        }
    )
}

// FUNÇÃO DELETAR
function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM carros WHERE id=$1 RETURNING *"
    const values = [id];

    cliente.query(sql, values,
        (err, res) => {
            if(err) {
                console.log(err);
                callback(erroBD, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let carro = res.rows[0];
                callback(undefined, carro);
            }
            else {
                callback(erroCarroNaoEncontrado, undefined);
            }
            cliente.end();        
        }
    )
}

module.exports = {
    adicionar, listar, atualizar, buscarPorMarcaId, deletar
    }