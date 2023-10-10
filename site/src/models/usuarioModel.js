var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selectInfo(fkUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectInfo(): ", fkUser)
    var instrucao = `
        SELECT * FROM usuario WHERE idUser = '${fkUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, telefone, sindico, bloco, torre, apartamento, fkSindico) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, telefone, sindico, bloco, torre, apartamento, fkSindico) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${sindico}', '${bloco}', '${torre}', '${apartamento}', ${fkSindico});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarInfo(nome, email, telefone, fkUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE usuario SET nome = '${nome}', email = '${email}', telefone = '${telefone}' WHERE idUser = ${fkUser};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selectMorad(fkUsuario) {
    console.log("ACESSEI O DESPESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectDesp()", fkUsuario);
    var instrucao = `
    SELECT nome,
    email, 
    telefone,
    apartamento
    FROM Usuario
     WHERE fkSindico = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    selectInfo,
    alterarInfo,
    selectMorad
};