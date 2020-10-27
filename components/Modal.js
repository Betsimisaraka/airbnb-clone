import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
// import Form from '../components/Form';
// import LocForm from '../components/Form';

function Modal(props) {
  const { closeModal, show, handleSelect, handleGuest, handleSubmit, openModal, setShow } = props;

  const modal = 
  (<>
    <div className={show ? 'overlay' : 'hide'}>
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <Form handleSelect={handleSelect} handleGuest={handleGuest} handleSubmit={handleSubmit} openModal={openModal} setShow={setShow} />
      </div>
    </div> 
  </>)
  return ReactDOM.createPortal(
    modal, document.getElementById('modal_root')
  );
}

export default Modal;

