import React, { useEffect, useState } from "react";
import { todos } from "./data/todos";
// import Button from "./components/ui/Button";
import { ToastContainer, toast } from "react-toastify";
import Button from "./components/ui/Button";
import axios from "axios";

function TodosCrudOwnApi() {
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !title.trim()) {
      toast.error("title is required", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    axios
      .post("http://localhost:3000/api/todos", {
        title: title,
      })
      .then((res) => {
        fetchTodos();
      })
      .catch((err) => {
        toast.error("server error", {
          position: "bottom-center",
          theme: "colored",
        });
      });
  };

  const clear = () => {
    setTitle("");
    setEditIndex(null);
  };

  const deleteTodo = (indexToDelete) => {
    // let oldTodos = [...todos]
    // oldTodos.splice(indexToDelete, 1);
    // setTodos(oldTodos);
    let oldTodos = todos.filter((el, index) => index !== indexToDelete);
    // localStorage.setItem("todos", JSON.stringify(oldTodos));
    setTodos(oldTodos);
  };

  const toggleStauts = (index) => {
    axios
      .put(`http://localhost:3000/api/todos/${index}`, {
        title: todos[index].title,
        completed: !todos[index].completed,
      })
      .then((res) => {
        fetchTodos();
      });


    // let oldTodos = [...todos];
    // oldTodos[index] = {
    //   title: todos[index].title,
    //   completed: !todos[index].completed,
    // };
    // // localStorage.setItem("todos", JSON.stringify(oldTodos));
    // setTodos(oldTodos);
  };

  const fetchTodos = () => {
    axios.get("http://localhost:3000/api/todos").then((res) => {
      console.log(res);
      setTodos(res.data.data);
    });
  };

  useEffect(() => {
    fetchTodos();
    // let localTodos = JSON.parse(localStorage.getItem("todos"));
    // setTodos(localTodos || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log("render | re-render");

  return (
    <div style={{ marginLeft: "2rem" }} className="mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="border"
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

      <Button
        onClick={() => {
          axios.delete("http://localhost:3000/api/clear-todos").then((res) => {
            fetchTodos();
          });
          // setTodos([]);
          // localStorage.setItem("todos", JSON.stringify([]));
          // localStorage.removeItem("todos");
        }}
      >
        Clear All
      </Button>
      <br />
      <br />
      <ul style={{ listStyle: "none" }}>
        {todos.map((el, index) => (
          <li key={index} className="mb-">
            <input
              className="border mr-3"
              type="checkbox"
              checked={el.completed}
              onChange={(e) => {
                toggleStauts(index);
              }}
            />
            <span
              style={{ textDecoration: el.completed ? "line-through" : "" }}
            >
              {el.title}
            </span>
            <Button
              size="sm"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete
            </Button>
            <Button
              size="sm"
              onClick={() => {
                // editTodo(index);
                setTitle(el.title);
                setEditIndex(index);
              }}
            >
              edit
            </Button>
          </li>
        ))}
      </ul>

      {editIndex !== null && (
        <>
          <div className="backdrop" onClick={clear}></div>
          <div className="modal" style={{ border: "1px solid" }}>
            <p>Edit Todos</p>
            <button className="close" onClick={clear}>
              x
            </button>
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
              <br />
              <br />
              <input
                type="checkbox"
                name="status_check"
                id="status-check"
                // checked={todos[editIndex].completed}
                defaultChecked={todos[editIndex].completed}
                // onChange={() => {}}
              />
              <label htmlFor="status-check"> Mark as completed</label>
              <br />
              <br />
              <button>{editIndex === null ? "add" : "edit"}</button>
              {title && <button onClick={clear}>clear</button>}
            </form>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default TodosCrudOwnApi;
