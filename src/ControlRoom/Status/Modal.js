import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="modal__closeButton" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;