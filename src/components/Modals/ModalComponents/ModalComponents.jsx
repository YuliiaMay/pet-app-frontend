import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay, ModalSt } from "../ModalComponents/ModalComponents.styled";

const modalRoot = document.querySelector("#modal-root");

export function ModalComponents({ active, onClose, children }) {
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
