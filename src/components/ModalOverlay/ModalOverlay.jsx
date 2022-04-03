import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import modalOverlayStyle from '../ModalOverlay/ModalOverlay.module.css';

export const ModalOverlay = ({onClose}) => {

  return (
    <div className={modalOverlayStyle.overlay} onClose={onClose}>
    </div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay;
