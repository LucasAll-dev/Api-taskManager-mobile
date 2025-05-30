import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import tasRouter from "./routes/task.js";

const api = express();
const PORT = 3032;

api.use(express.json());
api.use(cors({
    origin: ['http://localhost:8081/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


api.use("/api", userRouter);
api.use("/api", tasRouter);

api.listen(PORT, () => {
    console.log(`Servidor escutando na porta http://localhost:${PORT}`)
});
