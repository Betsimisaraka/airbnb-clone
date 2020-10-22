import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
// import Form from '../components/Form';
// import LocForm from '../components/Form';

function Modal(props) {
  const { show, closeModal, handleSelect, handleGuest } = props;

  const modal = 
  (<>
    <div className={show ? 'overlay' : 'hide'}>
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <Form handleSelect={handleSelect} handleGuest={handleGuest} closeModal={closeModal}/>
      </div>
    </div> 
  </>)
  return ReactDOM.createPortal(
    modal, document.getElementById('modal_root')
  );
}

export default Modal;

