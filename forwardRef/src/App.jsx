import { useState } from "react";
import { CustomModal } from "./CustomModal";
import { DialogModal } from "./DialogModal";

function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);

  return (
    <div style={{position:'relative', marginTop:'20px'}}>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
    </button>
    <br/> <br/>
    <button onClick={() => setIsDialogModalOpen(true)}>
      Show Dialog Modal
    </button>

    <CustomModal isOpen={isCustomModalOpen} onClose={() => setIsCustomModalOpen(false)}>
      <p>this is a <strong>CUSTOM</strong> modal</p>
      <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
    </CustomModal>

    <DialogModal isOpen={isDialogModalOpen} onClose={() => setIsDialogModalOpen(false)}>
      <p>this is a <strong>DIALOG</strong> modal</p>
      <button onClick={() => setIsDialogModalOpen(false)}>Close</button>
    </DialogModal>
    </div>
  );
}

export default App;
