import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay, ModalSt } from "../ModalComponents/ModalComponents.styled";

const modalRoot = document.querySelector("#modal-root");

export function ModalComponents({ active, onClose, children }) {
  console.log("active", active);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };
  return createPortal(
    <Overlay className={active ? "active" : ""} onClick={handleBackdropClick}>
      <ModalSt className={active ? "active" : ""}>{children}</ModalSt>
    </Overlay>,
    modalRoot
  );
}

// ЛОГИКА ДЛЯ МОДАЛОК

// const [showModal, setShowModal] = useState(false);
// const [showModalNotice, setShowModalNotice] = useState(false);

// <button type="button" onClick={() => setShowModal(true)}>
//       Click Open Model ... ModalCongrats
//     </button>
//     <button type="button" onClick={() => setShowModalNotice(true)}>
//       Click Open Model ... ModalNotice
//     </button>
//     <ModalCongrats active={showModal} setShow={setShowModal} />
//     <ModalNotice active={showModalNotice} setShow={setShowModalNotice} />
