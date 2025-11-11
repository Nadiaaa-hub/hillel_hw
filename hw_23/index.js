const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
let nextId = 1;
let todos = [
  {
    id: nextId++,
    title: "Eat",
    description: "Eat cutlets",
    priority: "high",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.post("/todos", (req, res) => {
  const { title, description, priority, status } = req.body;
  const newTodo = {
    id: nextId++,
    title,
    description,
    priority,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  if (todo) {
    if (req.body.title) todo.title = req.body.title;
    if (req.body.description) todo.description = req.body.description;
    if (req.body.priority) todo.priority = req.body.priority;
    if (req.body.status) todo.status = req.body.status;
    todo.updatedAt = new Date();
    res.json(todo);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  if (index !== -1) {
    todos.splice(index, 1);
    res.json({ message: "Task was deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.listen(PORT, () => {
  console.log(`We live on: ${PORT}`);
});
