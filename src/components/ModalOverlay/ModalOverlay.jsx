import React/* { useEffect, useRef } */ from "react";
import PropTypes from 'prop-types';
import modalOverlayStyle from '../ModalOverlay/ModalOverlay.module.css';

export const ModalOverlay = (props) => {
  const overlayCloseRef = React.useRef(null)

  React.useEffect(() => {
    const overlayClose = (evt) => {
      if (evt.target === overlayCloseRef.current)
        props.onClose();
    }

    document.addEventListener("click", overlayClose)

    return () => {
      document.removeEventListener("click", overlayClose)
    }
  })

  return (
    <div className={modalOverlayStyle.overlay} onClose={props.onClose}>
      {props.children}
    </div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay;
