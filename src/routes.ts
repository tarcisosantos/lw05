import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };


/*   tipos de métodos que podem ser utilizados nas rotas
* GET =  Busca
* POST =  Criação (na aplicação, no BD, onde for necessário)
* PUT  =  Alteração
* DELETE =  Deletar
* PATCH =  Alterar  uma informação Especifica
*/
//  Rotas

/*
* Topos de parametros
* Routes Params -> Parametros de rotas (http://localhost:3333/setting/1)
* Query Params -> Filtros e Buscas (http://localhost:3333/setting/1?id=alugumacoisa)
* Body Params ->  Passa objestos dentro das requisições , como json
*/

