var database = require("../database/config")

// function autenticar(email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucao = `
//         SELECT idUser, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function registrar(nome, data, hora, valor, desc, user) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar():", nome, data, hora, valor, desc, user);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Despesa (nomeDesp, dataDesp, horaDesp, valorDesp, descDesp, fkUser) VALUES ('${nome}', '${data}', '${hora}', '${valor}', '${desc}', '${user}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function selectDesp(fkUser) {
    console.log("ACESSEI O DESPESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectDesp()", fkUser);
    var instrucao = `
    SELECT nomeDesp,
    dataDesp, 
    horaDesp,
    valorDesp,
    descDesp
    FROM Despesa
     WHERE fkUser = '${fkUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // autenticar,
    registrar,
    selectDesp
};