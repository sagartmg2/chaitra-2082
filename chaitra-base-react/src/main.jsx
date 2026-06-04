import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/* COMPONENTs 
    - it must be capitalized.
    - it must return html 
*/

// function Course(title, description, price) {
// console.log({ title });
// props = {title:"",description:"",description}

createRoot(document.getElementById("root")).render(
  <div className="main">
      <App/>
  </div>,
);
