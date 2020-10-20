import React, { useState, useEffect } from 'react';
import staysData from '../stays.json';
import StaysCard from '../components/StaysCard';

function App() {
    const [stays, setStays] = useState([]);

    function fetchData() {
        let res = staysData;
        console.log(res);
        setStays(res);
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className="main">
            <header className="header">
                <h1 className="heading">Hello world</h1>
                <div className="add_container">
                    <p className="city">Helsinki, Finland</p>
                    <p className="add_guest">Add guests</p>
                    <button className="add_button">Search</button>
                </div>
            </header>
            <div>
                <h2>Stays in Finland</h2>
                {stays.map((stay, i) => {
                    let keyValue = Date.now() + i;
                    return <StaysCard key={keyValue} stay={stay} />
                })}
            </div>
        </main>
    )
}

export default App;