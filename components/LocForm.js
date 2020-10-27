import React from 'react';

function LocForm(props) {
    const { openModal, show } = props;
    return (
    <div>
        {!show && <button type="button" onClick={openModal}>Select</button>}
        <button type="button" >Add a guest</button>
        <button type="button" >Search</button>
    </div>
    )
}


export default LocForm;