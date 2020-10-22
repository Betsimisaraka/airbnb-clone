import React from 'react';

function Form(props) {
    const { show, handleSelect, openModal, handleGuest} = props;
    return (
        <form className="add_container">
            <select className="city" name="Location" onChange={handleSelect}>
                <option value="Select a city">Select a city</option>
                <option value="Helsinki">Helsinki</option>
                <option value="Turku">Turku</option>
                <option value="Oulu">Oulu</option>
                <option value="Vaasa">Vaasa</option>
            </select>
            <input className="add_guest" type="number" name="guestNum" placeholder="Add guests" onChange={handleGuest} />
            <p className="container_btn">
                {!show && <button type="button" onClick={openModal} className="add_button">Search</button>}
            </p>
        </form>
    )
}


export default Form;