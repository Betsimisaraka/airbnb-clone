import React from 'react'

function StaysCard({ stay }) {
    return (
        <div className="stay_container">
            <img className="photo" src={stay.photo} />
            <div className="description">
                {stay.superHost ? <p>SUPER HOST</p> : ""}
                <p>{stay.type} {stay.beds ? `. ${stay.beds} beds` : ""}</p>
                <p className="rate">{stay.rating}</p>
            </div>
            <h3>{stay.title}</h3>
        </div>
    )
}

export default StaysCard