import React, { useState, useEffect } from 'react';
import staysData from '../stays.json';
import StaysCard from '../components/StaysCard';

function App() {
    const [stays, setStays] = useState([]);
    const [cities, setCity] = useState('');
    const [guests, setQuest] = useState('');

    function fetchData() {
        let res = staysData;
        console.log(res);
        setStays(res);
    }


    useEffect(() => {
        fetchData();
    }, []);

    const handleSelect = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    const handleChange = (e) => {
        setQuest(e.target.value);
    };

    return (
        <main className="main">
            <header className="header">
                <h1 className="heading">Hello world</h1>
                <form className="add_container">
                    <select className="city" name="Location" value={cities} onChange={handleSelect}>
                        <option value="Select a city">Select a city</option>
                        <option value="Helsinki">Helsinki</option>
                        <option value="Turku">Turku</option>
                        <option value="Oulu">Oulu</option>
                        <option value="Vaasa">Vaasa</option>
                    </select>
                    <input className="add_guest" type="number" name="guestNum" placeholder="Add guests" onChange={handleChange} />
                    <button className="add_button">Search</button>
                </form>
            </header>
            <div>
                <h2>Stays in Finland</h2>
                <p>12 + Stays</p>
            </div>
                <div className="container">
                {stays.filter(stay => stay.city.toLowerCase().includes(cities.toLowerCase())).map((stay, i) => {
                    let keyValue = Date.now() + i;
                    return <StaysCard key={keyValue} stay={stay} />
                })}
            </div>
        </main>
    )
}

export default App;