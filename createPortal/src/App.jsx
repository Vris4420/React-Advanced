import { Children, useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
      <h1>Demostration of createPortal from react-dom</h1>
    </div>
      <div
        onClick={() => console.log("In the div")}
        style={{ position: "relative", marginTop: "100px" }}
      >
        <h1>App Content</h1>
        <button onClick={() => setIsOpen(true)}>Show Message</button>
        <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Secret Message
          <br />
          Click To Close
        </AlertMessage>
      </div>
    </>
  );
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div
    onClick={onClose}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: ".5rem",
        left: "50%",
        translate: "-50%",
        background: "#777",
        color: "white",
        borderRadius: ".5rem",
        padding: ".5rem",
      }}
    >
      {children}
    </div>,

    document.querySelector("#alert-message")
  );
}

export default App;
