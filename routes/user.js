import UserController from "../controllers/users.js";
import express from "express";

const router = express.Router();

router.get("/visualizarUser", UserController.userGetAll); // Rota para visualizar os usuarios
router.post("/createUser", UserController.userPost);
router.put("/updateUser/:id_users", UserController.userUpdate);
router.delete("/deleteUser/:id_users", UserController.userDelete);

export default router;