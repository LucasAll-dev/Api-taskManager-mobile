import createConnectionDB from "../config/db.js";

class TaskServices {
    //funcao para visualizar tarefas
    async visualizarTasks() {
        const db = await createConnectionDB();
        try {
            const [rows] = await db.execute("SELECT * FROM tarefas");
            return rows;
        } catch (err) {
            console.log("Erro ao buscar as Tarefas: " + err);
        } finally {
            await db.end();
        };
    };

    //funcao para visualizar as tarefas por usuario
    async visualizarTasksId(usuarioId) {
        const db = await createConnectionDB();
        try {
            const [rows] = await db.execute("SELECT * FROM tarefas WHERE usuario_id = ?", [usuarioId]);
            return rows;
        } catch (err) {
            console.log("Erro ao buscar as tarefas por id: " + err);
        } finally {
            await db.end();
        }
    }

    //funcao para criar tarefas
    async criarTasks(taskData) {
        const db = await createConnectionDB();
        const DataCriacao = new Date();
        try {
            const [rows] = await db.execute(
                "INSERT INTO tarefas (titulo, descricao, , data_criacao) VALUES (?, ?, ?)",
                [taskData.titulo, taskData.descricao, DataCriacao]
            );
            return rows.insertId;
        } catch (err) {
            console.log("Erro ao criar a Tarefa: " + err);
        } finally {
            await db.end();
        };
    };

    //funcao atualizar as tarefas
    async atualizarTasks (id_tasks, taskData) {
        const db = await createConnectionDB();
        try {
            const [rows] = await db.execute(
                "UPDATE tarefas SET titulo = ?, descricao = ?, WHERE id_tasks = ?",
                [taskData.titulo, taskData.descricao, id_tasks]
            );
            return rows.affectedRows > 0;
        } catch (err) {
            console.log("Erro ao Atualizar a Tarefa: " + err);
        } finally {
            await db.end();
        };
    };

    //funcao para marca como concluida a tarefa
    async concluirTasks (id_tasks) {
        const db = await createConnectionDB();
        try {
            const concluida = "Concluida";
            const [rows] = await db.execute(
                "UPDATE tarefas SET concluida = ? WHERE id_tasks = ?",
                [concluida, id_tasks]
            );
        } catch (err) {
            console.log("Erro ao marcar a Tarefa como Concluida: " + err);
        } finally {
            await db.end();
        };
    };

    //metodo DELETE para tarefas
    async deletarTasks(id_tasks) {
        const db = await createConnectionDB();
        try {
            const [resultado] = await db.execute(
                'DELETE FROM tarefas WHERE id_tasks = ?',
                [id_tasks]
            );
            return resultado.affectedRows > 0;
        } catch (err) {
            console.log("Erro ao deletar a Tarefa: " + err);
        } finally {
            await db.end();
        };
    };
};

export default new TaskServices()