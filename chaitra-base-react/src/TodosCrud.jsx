import React, { useState } from "react";
// import Button from "./components/ui/Button";

function TodosCrud() {
  // let todos = ["html", "css", "js", "react", "express"];

  const [todos, setTodos] = useState(["html", "css", "js"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // todos.push(e.target.title.value); //ERROR : state variable should changed directly
    // let oldTodos = todos; // ERROR: array is poiting to the reference of original todos array
    // oldTodos.push(e.target.title.value); // error:

    let oldTodos = [...todos];
    oldTodos.push(e.target.title.value);
    // console.log(oldTodos);

    // setTodos(["html", "css", "js", "database"]);
    setTodos(oldTodos);

    e.target.title.value = "";
  };

  console.log("re-render");

  return (
    <div style={{ marginLeft: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input name="title" /> <button>add</button>
      </form>
      <ul>
        {todos.map((el, index) => (
          <li key={index}>{el} <button>delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default TodosCrud;
