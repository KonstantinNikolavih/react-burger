import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay.jsx";
import style from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";



export function Modal(props) {
  const overlayCloseRef = useRef(null)
  const modalRoot = document.querySelector("#modal");


  const handleEscClose = (evt) => {
    if (evt.key === "Escape")
      props.onClick();
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEscClose)

    return () => {
      document.removeEventListener("keydown", handleEscClose)
    }
  }, []);

  return ReactDOM.createPortal(
    <div className={style.modal}>
      <ModalOverlay onClick={props.overlayCloseRef}>
        <button className={style.close} onClick={props.onClick}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </ModalOverlay>
    </div>
    ,
    modalRoot
  )
}

export default Modal;
