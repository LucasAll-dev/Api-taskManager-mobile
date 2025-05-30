import createConnectionDB from "../config/db.js";

class UserServices {
    //funcao para visualizar os usuarios
    async visualizarUsers() {
        const db = await createConnectionDB();
        try {
            const [rows] = await db.execute("SELECT * FROM usuarios");
            return rows;
        } catch (err) {
            console.log("Erro ao buscar Usuarios: " + err);
        } finally {
            await db.end();
        };
    };

    //metodo POST para usuarios
    async criarUsers(userData) {
        const db = await createConnectionDB();
        try {
            const [resultado] = await db.execute(
                'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
                [userData.nome, userData.email, userData.senha]
            );
            return resultado.insertId;
        } catch (err) {
            console.log("Erro ao criar o Usuario: " + err);
        } finally {
            await db.end();
        };
    };

    //metodo UPDATE para usuarios
    async atualizarUsers(id_users, userData) {
        const db = await createConnectionDB();
        try {
            const [resultado] = await db.execute(
                'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id_users = ?',
                [userData.nome, userData.email, userData.senha, id_users]
            );
            return resultado.affectedRows > 0;
        } catch (err) {
            console.log9("Erro ao atualizar o Usuario: " + err);
        } finally {
            await db.end();
        };
    };

    //metodo DELETE para usuarios
    async deletarUsers(id_users) {
        const db = await createConnectionDB();
        try {
            const [resultado] = await db.execute(
                'DELETE FROM usuarios WHERE id_users = ?',
                [id_users]
            );
            return resultado.affectedRows > 0;
        } catch (err) {
            console.log("Erro ao deletar o Usuario: " + err);
        } finally {
            await db.end();
        };
    };

    //metodo de login
    async login(email, senha) {
        const db = await createConnectionDB();
        try {
            const [rows] = await db.execute(
                "SELECT id_users, nome FROM usuarios WHERE email = ? AND senha = ?",
                [email, senha] 
            );

            if (rows.length === 0) {
                throw new Error("Email ou senha incorretos");
            }

            return rows[0];

        } catch (err) {
            console.log("Erro no login: " + err);
            throw err;
        } finally {
            await db.end();
        }
    }
};

export default new UserServices()