import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import style from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function Modal({ title, onClose, children }) {
  const modalRoot = document.querySelector("#modal");

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

  useEffect(() => {
    const closeModalOnClick = () => {
      onClose()
    }

    document.addEventListener('click', closeModalOnClick);

    return () => {
      document.removeEventListener('click', closeModalOnClick);
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={style.modal}>
        <h3 className={style.title}>{title}</h3>
        {/*  <ModalOverlay onClose={onClose}> */}
        <button className={style.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
        {/*  </ModalOverlay> */}
      </div>
    </>,
    modalRoot
  )
}

Modal.propTypes = {
  /*  title: PropTypes.func.isRequired, */
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
