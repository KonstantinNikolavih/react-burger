import React/*  { useEffect, useRef } */ from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import style from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";



export function Modal(props) {
  const overlayCloseRef = React.useRef(null)
  const modalRoot = document.querySelector("#modal");

  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape")
        props.onClose();
    }

    document.addEventListener("keydown", handleEscClose)

    return () => {
      document.removeEventListener("keydown", handleEscClose)
    }
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <div className={style.modal}>
          <ModalOverlay onClick={props.overlayCloseRef}>
            <button className={style.close} onClick={props.onClose}>
              <CloseIcon type="primary" />
            </button>
            {props.children}
          </ModalOverlay>
        </div>
      </>,
      modalRoot
    )
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
