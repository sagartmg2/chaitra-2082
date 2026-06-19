const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// global middleware to disable cors error
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "welcome to express api !" });
});

/* assuming this is database todos */
let todos = [
  { title: "html", completed: true },
  { title: "css", completed: true },
  { title: "js", completed: true },
  { title: "react", completed: true },
];

app.get("/api/todos", (req, res) => {
  res.send({
    data: todos,
  });
});

app.post("/api/todos", (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      msg: "bad request",
      erros: [
        {
          field: "title",
          msg: "required",
        },
      ],
    });
  }

  todos.push({ title: req.body.title, completed: false });
  res.send({ msg: "todos created" });
});

app.delete("/api/clear-todos", (req, res) => {
  todos = [];
  res.send({ msg: "todos cleared" });
});

app.put("/api/todos/:index", (req, res) => {
  if (
    !req.body.title ||
    (req.body.completed != true && req.body.completed != false)
  ) {
    return res.status(400).send({
      msg: "bad request",
      erros: [
        {
          field: "title",
          msg: "required",
        },
        {
          field: "completed",
          msg: "required",
        },
      ],
    });
  }

  //   console.log(req.params);
  todos[req.params.index] = {
    title: req.body.title,
    completed: req.body.completed,
  };

  res.send({ msg: "updated" });
});

// app.delete()

/* npm init */
/* npm i -g nodemon */
/* npm install --save-dev nodemon */
/* nodemon server.js */
/* npm i cors */

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
