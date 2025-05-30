import TaskController from "../controllers/tasks.js";
import express from "express";

const router = express.Router();

router.get("/visualizarTask", TaskController.taskGetAll); // Rota para visualizar todas as tarefas
router.get("/visualizarTaskId/:id_users", TaskController.taskGetId); // Rota para visualizar as tarefas de um usuario
router.post("/createTask", TaskController.taskPost);
router.put("/updateTask/:id_tasks", TaskController.taskUpdate);
router.put("/tarefaConcluida/:id_tasks", TaskController.tasksConcluida); // rota para concluir tarefa
router.delete("/deleteTask/:id_tasks", TaskController.taskDelete);

export default router;