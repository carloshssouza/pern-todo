import express from "express";
import todoController from "../controllers/todos.controller.js";

const routes = express.Router();

const {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = todoController;

//create a Todo
routes.post("/todos", createTodo);

//get all todos
routes.get("/todos", getAllTodos);

//get a todos
routes.get("/todos/:id", getTodoById);

//update a todos
routes.put("/todos/:id", updateTodo);

//delete a todo
routes.delete("/todos/:id", deleteTodo);

export default routes;
