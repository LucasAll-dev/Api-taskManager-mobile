import mysql from "mysql2/promise";

//configuracao do banco de dados
async function createConnectionDB() {
    try {
        return mysql.createPool({
        host: "localhost",
        user: "root",
        password: "0305829l@",
        database: "taskDB",
        waitForConnections: true,
        connectionLimit: 15, //numero maximo de conexoes no pool
        queueLimit: 0 // 0 para nao ter limites de requisicões
    });
    } catch (err) {
        console.log("Erro no banco de dados: " + err); //tratamento de erro
    };
}

export default createConnectionDB;