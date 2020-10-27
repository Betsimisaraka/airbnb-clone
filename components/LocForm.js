import React from 'react';

function LocForm(props) {
    const { openModal, show, handleSelect } = props;
    return (
    <div>
        {!show && <button className="filter_location" type="button" onClick={openModal}>
        </button>}
        {! show && <button className="filter_guest" onClick={openModal} type="button" >Add a guest
        </button>}
        <button className="search" type="button" >Search</button>
    </div>
    )
}


export default LocForm;