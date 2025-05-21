import UserServices from "../services/userServices.js";

class UserController {

    //metodo get
    async userGetAll(_, res) {
        try {
            const users = await UserServices.visualizarUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({error: err.mensage});
        };
    };

    //metodo post
    async userPost(req, res) {
        try {
            const novoUser = await UserServices.criarUsers(req.body);
            res.status(201).json(novoUser);
        } catch (err) {
            res.status(400).json({ error: err.mensage});
        };
    };

    //metodo updade
    async userUpdate(req, res) {
        try {
            const updateUser = await UserServices.atualizarUsers(req.params.id_users, req.body);
            res.json(updateUser);
        } catch (err) {
            res.status(400).json({error: err.mensage});
        };
    };

    //metodo delete
    async userDelete(req, res) {
        try {
            await UserServices.deletarUsers(req.params.id_users);
            res.status(204).end();
        } catch (err) {
            if (err.mensage === 'Usuario nao encontrado') {
                returnres.status(404).json({ error: err.mensage});
            };
            res.status(500).json({error: err.mensage});
        };
    };
}

export default new UserController();