import React from 'react';

function Form(props) {
    return (
        <form className="add_container">
            <select className="city" name="Location" onChange={props.handleSelect}>
                <option value="Select a city">Select a city</option>
                <option value="Helsinki">Helsinki</option>
                <option value="Turku">Turku</option>
                <option value="Oulu">Oulu</option>
                <option value="Vaasa">Vaasa</option>
            </select>
            <input className="add_guest" type="number" name="guestNum" placeholder="Add guests" onChange={props.handleChange} />
                <button onClick={props.handleChange} className="add_button">Search</button>
        </form>
    )
}


export default Form;