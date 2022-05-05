import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import style from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function Modal({ title, onClose, children }) {
  const modalRoot = document.querySelector("#modal");

  console.log(modalRoot)

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape")
        onClose();
    }

    document.addEventListener("keydown", handleEscClose)

    return () => {
      document.removeEventListener("keydown", handleEscClose)
    }
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={style.modal}>
        <h3 className={` text_type_main-large ${style.title}`}>{title}</h3>
        <button className={style.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    modalRoot
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
