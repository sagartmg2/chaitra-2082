import axios from "axios";
import React from "react";

function TodosListDummyApi() {
  axios.get("https://jsonplaceholder.typicode.com/todos")
  return <div>TodosListDummyApi</div>;
}

export default TodosListDummyApi;
