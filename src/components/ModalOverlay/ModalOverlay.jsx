import React, { useEffect, useRef } from "react";
import modalOverlayStyle from '../ModalOverlay/ModalOverlay.module.css';

export const ModalOverlay = (props) => {
  const overlayCloseRef = useRef(null)

  const overlayClose = (evt) => {
    if (evt.target === overlayCloseRef.current)
      props.onClick();
  }
  useEffect(() => {
    document.addEventListener("click", overlayClose)

    return () => {
      document.removeEventListener("click", overlayClose)
    }
  })

  return (
    <div className={modalOverlayStyle.overlay} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default ModalOverlay;
