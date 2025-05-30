import TasksServices from "../services/taskServices.js";
class TaskController {

    //metodo get
    async taskGetAll(_, res) {
        try {
            const tasks = await TasksServices.visualizarTasks();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({error: err.mensage});
        };
    };

    //metodo get para visualizar as tarefas por usuario
    async taskGetId(req, res) {
        try {
            const tasks = await TasksServices.visualizarTasksId(req.params.id_users);
            res.json(tasks);
        } catch (err) {
            res.status(500).json({error: err.mensage});
        };
    };

    //metodo post
    async taskPost(req, res) {
        try {
            const newTasks = await TasksServices.criarTasks(req.body);
            res.status(201).json(newTasks);
        } catch (err) {
            res.status(400).json({ error: err.mensage});
        };
    };

    //metodo updade
    async taskUpdate(req, res) {
        try {
            const updateTask = await TasksServices.atualizarTasks(req.params.id_tasks, req.body);
            res.json(updateTask);
        } catch (err) {
            res.status(400).json({error: err.mensage});
        };
    };

    //metodo update, marca tarefa como concluida
    async tasksConcluida(req, res) {
        try {
            const taskConcluida = await TasksServices.concluirTasks(req.params.id_tasks);
            res.json(taskConcluida);
        } catch (err) {
            res.status(400).json({error: err.mensage});
        };
    };

    //metodo delete
    async taskDelete(req, res) {
        try {
            await TasksServices.deletarTasks(req.params.id_tasks);
            res.status(204).end();
        } catch (err) {
            if (err.mensage === 'Tarefa não encontrada') {
                returnres.status(404).json({ error: err.mensage});
            };
            res.status(500).json({error: err.mensage});
        };
    };
}

export default new TaskController();