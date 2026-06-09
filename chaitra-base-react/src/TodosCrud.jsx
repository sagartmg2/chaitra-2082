import React from "react";
// import Button from "./components/ui/Button";

function TodosCrud() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.title);
    console.log(e.target.title.value);
  };

  return (
    <>
      {/* <input /> <Button rounded >add</Button> */}
      <form onSubmit={handleSubmit}>
        <input name="title" /> <button>add</button>
      </form>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </>
  );
}

export default TodosCrud;
