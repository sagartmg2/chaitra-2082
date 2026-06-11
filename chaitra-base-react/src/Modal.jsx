import React from "react";
import Button from "./components/ui/Button";

function Modal() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("open modal");
        }}
      >
        open modal
      </Button>
    </div>
  );
}

export default Modal;
``