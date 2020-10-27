import React, { useState } from 'react';

function Guest(props) {
    const { countAdult, setCountAdult, countChild, setCountChild } = props;
    return (
        <div>
            <div>
                <h3>Adults</h3>
                <p>Ages 13 or above</p>
                <button type="button" onClick={() => setCountAdult(countAdult + 1)}>+</button>
                <p>{countAdult}</p>
                <button type="button" onClick={() => setCountAdult(countAdult - 1)}>-</button>
            </div>
            <div>
                <h3>Children</h3>
                <p>Ages 2 - 12</p>
                <button type="button" onClick={() => setCountChild(countChild + 1)}>+</button>
                <p>{countChild}</p>
                <button type="button" onClick={() => setCountChild(countChild - 1)}>-</button>
            </div>
        </div>
    )
}

export default Guest