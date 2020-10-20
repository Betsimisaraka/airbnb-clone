import React from 'react'

function StaysCard({ stay }) {
    return (
        <div className="stay_container">
            <img className="photo" src={stay.photo} />
            <div className="description">
                {stay.superHost ? <p>SUPER HOST</p> : ""}
                <p>{stay.type} {stay.beds ? `. ${stay.beds} beds` : ""}</p>
                <p>{stay.rating}</p>
            </div>
            <h3>{stay.title}</h3>
            <p>{stay.city}</p>
        </div>
    )
}

export default StaysCard