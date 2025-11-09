// server.js
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let todos = [];

// -----------------
// Get all todos
// -----------------
app.get("/todos", (req, res) => {
  res.json(todos);
});

// -----------------
// Get single todo
// -----------------
app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// -----------------
// Create new todo
// -----------------
app.post("/todos", (req, res) => {
  const {
    title,
    description,
    priority = "medium",
    status = "todo",
    tags = [],
    dueDate,
  } = req.body;

  const newTodo = {
    id: uuidv4(),
    title,
    description,
    priority,
    status,
    tags,
    dueDate,
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// -----------------
// Update todo
// -----------------
app.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { title, description, priority, status, tags, dueDate } = req.body;

  if (title) todo.title = title;
  if (description) todo.description = description;
  if (priority) todo.priority = priority;
  if (status) todo.status = status;
  if (tags) todo.tags = tags;
  if (dueDate) todo.dueDate = dueDate;

  todo.updatedAt = new Date();
  res.json(todo);
});

// -----------------
// Delete todo
// -----------------
app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  todos.splice(index, 1);
  res.status(204).send();
});

// -----------------
// Add comment
// -----------------
app.post("/todos/:id/comments", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { text } = req.body;
  const comment = { id: uuidv4(), text, createdAt: new Date() };
  todo.comments.push(comment);
  todo.updatedAt = new Date();
  res.status(201).json(comment);
});

// -----------------
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
