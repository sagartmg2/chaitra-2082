import React, { useState } from "react";
import Button from "./components/ui/Button";

function Modal() {
  // let showModal = false;

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          console.log("open modal");
          setShowModal(true);
        }}
      >
        open modal
      </Button>

      <ul>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
        <li> todo -1 </li>
      </ul>

      {showModal && (
        <>
          <div className="backdrop" onClick={closeModal}></div>
          <div className="modal" style={{ border: "1px solid" }}>
            <button className="close" onClick={closeModal}>
              x
            </button>
            <p>Edit Todos</p>
            <form>
              <p>modal contents</p>
              <p>modal contents</p>
              <p>modal contents</p>
              <p>modal contents</p>
              <p>modal contents</p>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
``;
