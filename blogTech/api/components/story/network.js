import express from "express";
import {  update, deletestory, showAll } from "./controller";
import {  signUp } from "./controller";
const storyRouter = express.Router();

// Lo que debo proteger es lo siguiente
//? Para poder proteger mi ruta debo usar all()

storyRouter.route("/list").get(showAll);
storyRouter.route("/crear/:id").put(signUp);
storyRouter.route("/delete/:id").delete(deletestory);
storyRouter.route("/update/:id").put(update);
//? Usamos export default cuando solamente hay una cosa que exportar
export default storyRouter;
