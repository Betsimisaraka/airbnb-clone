import React from 'react';

function LocForm(props) {
    const { openModal, show } = props;
    return (
    <p>
        {!show && <button onClick={openModal}>Select</button>}
        <button onClick={openModal}>Add a guest</button>
        <button>Search</button>
    </p>
    )
}


export default LocForm;