import Button, { SmallButton, BigButton } from "./components/ui/Button";
import { todos } from "./data/todos";

const Todos = () => {
  return (
    <>
      <h1> TODOS list</h1>
      {/* FIXME : covert this to tabular form:  */}

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="todos">
          {/* <tr>
          <td>{todos[0].todo}</td>
          <td>true</td>
        </tr>
         */}
          {todos.map((el, index) => {
            return (
              <tr key={el.id}>
                <td>{el.todo}</td>
                <td>
                  <span className={`status ${!el.completed ? "pending" : ""}`}>
                    {el.completed ? "yes" : "no"}
                  </span>
                </td>

                {/* <td>{el.completed ? <span className="status">yes</span> : <span className="status pending">no</span>}</td> */}

                <td>
                  <button className="btn btn-sm">edit</button>{" "}
                  <button className="btn btn-sm">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul>
        {/* <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li> */}
        {todos.map((el) => {
          return (
            <li key={el.id}>
              {el.todo} ( {el.completed ? "yes" : "no"} )
              &nbsp;
              <Button size="sm" label="edit"/>
              <Button label="delete" rounded/>
              <Button size="lg" label="edit" rounded/>
              {/* <SmallButton/> */}
              {/* <BigButton/> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
