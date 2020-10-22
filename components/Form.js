import React from 'react';

function Form(props) {
    const { handleSelect, handleGuest } = props;
    return (
        <div>
            <form className="add_container" onSubmit={handleSelect}>
                <select className="city" name="Location" onChange={handleSelect}>
                    <option value="Select a city">Select a city</option>
                    <option value="Helsinki">Helsinki</option>
                    <option value="Turku">Turku</option>
                    <option value="Oulu">Oulu</option>
                    <option value="Vaasa">Vaasa</option>
                </select>
                <input className="add_guest" type="number" name="guestNum" placeholder="Add guests" onChange={handleGuest} />
                <p className="container_btn">
                    <button type="submit" className="add_button">Search</button>
                </p>
            </form>
            {/* <div>
                <p>Helsinki, Finland</p>
                <p>Turku, Finland</p>
                <p>Oulu, Finland</p>
                <p>Vaasa, Finland</p>
            </div> */}
        </div>
    )
}


export default Form;