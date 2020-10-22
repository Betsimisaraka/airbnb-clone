import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';

function Modal(props) {
  const { show, closeModal } = props;

  const modal = 
  (<>
    <div className={show ? 'overlay' : 'hide'}>
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <Form />
      </div>
    </div> 
  </>)
  return ReactDOM.createPortal(
    modal, document.getElementById('modal_root')
  );
}

export default Modal;

