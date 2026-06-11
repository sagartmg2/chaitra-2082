import React, { useState } from "react";
import { todos } from "./data/todos";
// import Button from "./components/ui/Button";
import { ToastContainer, toast } from "react-toastify";

function TodosCrud() {
  // let todos = ["html", "css", "js", "react", "express"];

  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(["html", "css", "js"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !title.trim()) {
      toast.error("title is required", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    // todos.push(e.target.title.value); //ERROR : state variable should changed directly
    // let oldTodos = todos; // ERROR: array is poiting to the reference of original todos array
    // oldTodos.push(e.target.title.value); // error:

    if (editIndex == null) {
      let oldTodos = [...todos];
      oldTodos.push(e.target.title.value);
      // console.log(oldTodos);
      // setTodos(["html", "css", "js", "database"]);
      setTodos(oldTodos);
      clear();
      // e.target.title.value = "";
    } else {
      let oldTodos = [...todos];
      oldTodos[editIndex] = title;

      setTodos(oldTodos);
      clear();
    }
  };

  const clear = () => {
    setTitle("");
    setEditIndex(null);
  };

  const deleteTodo = (indexToDelete) => {
    // let oldTodos = [...todos]
    // oldTodos.splice(indexToDelete, 1);
    // setTodos(oldTodos);

    setTodos(todos.filter((el, index) => index !== indexToDelete));
  };

  console.log("render | re-render");

  return (
    <div style={{ marginLeft: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={title}
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button>{editIndex === null ? "add" : "edit"}</button>
        {title && <button onClick={clear}>clear</button>}
      </form>
      <ul style={{ listStyle: "none" }}>
        {todos.map((el, index) => (
          <li key={index}>
            <input type="checkbox" />
            {el}{" "}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                // editTodo(index);
                setTitle(el);
                setEditIndex(index);
              }}
            >
              edit
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default TodosCrud;
