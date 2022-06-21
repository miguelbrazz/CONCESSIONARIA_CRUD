const cadastroCarros = require('./cadastro_carros.js')

// cadastroCarros.adicionar({modelo: "Conversivel", marca: "HONDA", preco: '58.00'},
//     (err, carro) => {
//         console.log("Adicionando novo carro...")
//         if(err) {
//             console.log("Sistema está com problemas!");
//             console.log(err);
//         }
//         else {
//             console.log("[Atualização] Carro adicionado: ");
//             console.log(carro);
//         }
//     });


cadastroCarros.listar(
    (err, carros) => {
        console.log("Listar: ");
        if(err) {
            console.log("Sistema está com problemas!");
            console.log(err);
        }
        else {
            console.log(carros);
        }
    }
);


// cadastroCarros.atualizar(2, {modelo: "Picape", marca: "CHEVROLET", preco: '135.00'},
// function(erro, carro) {
//     console.log("[Atualização] Carro atualizado(4): ");
//     if(erro) {
//         console.log("Erro: "+erro);
//     }
//     else {
//         console.log(carro);
//     }
// });


// (MARCA FIAT: ID 3,4,5,6)
cadastroCarros.buscarPorMarcaId(3, (erro, carro) => {
        console.log("Buscando por Marca...(FIAT): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(carro);
        }

});


// (MARCA HONDA: ID 8,9,10)
cadastroCarros.buscarPorMarcaId(8, (erro, carro) => {
    console.log("Buscando por Marca...(HONDA): ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(carro);
    }

});


// cadastroCarros.deletar(1, (erro, carro) => {
//     console.log("[Atualização] Carro Deletado(1): ");
//     if(erro) {
//         console.log("Erro: "+erro);
//     }
//     else {
//         console.log(carro);
//     }
// });
