import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import tasRouter from "./routes/task.js";

const api = express();
const PORT = 3032;

api.use(express.json());
api.use(cors());


api.use("/api/users", userRouter);
api.use("/api/tasks", tasRouter);

api.listen(PORT, () => {
    console.log(`Servidor escutando na porta http://localhost:${PORT}`)
});
