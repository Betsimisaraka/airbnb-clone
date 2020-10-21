import React, { useState, useEffect } from 'react';
import staysData from '../stays.json';
import StaysCard from '../components/StaysCard';
import Form from '../components/Form'

function App() {
    let data = staysData;
    const [stays, setStays] = useState([]);
    const [cities, setCities] = useState('');
    const [guest, setGuest] = useState('');
    const [isShown, setIsShown] = useState('false');

    const handleSelect = (e) => {
        setCities(e.target.value);
      const filteredCity = setStays(data.filter(stay => {
            return stay.city.toLowerCase() === e.target.value.toLowerCase();
        }))
        return filteredCity;
    }

    const handleGuest = (e) => {
        setGuest(e.target.value)
      const filteredGuest = setStays(data.filter(stay => {
            return stay.maxGuests.toString() === e.target.value.toString();
        }))
        return filteredGuest;
    }

    const show = () => {
        setIsShown(true);
    }

    return (
        <main className="main">
            <header className="header">
                <h1 className="heading">Hello world</h1>
                <Form handleGuest={handleGuest} handleSelect={handleSelect} show={show} />
            </header>
            <div>
                <h2>Stays in Finland</h2>
                <p>12 + Stays</p>
            </div>
                <div className="container">
                {guest || cities 
                    ? stays.map((stay, i) => {
                        let keyValue = Date.now() + i;
                        return <StaysCard key={keyValue} stay={stay} />
                    })
                    : data.map((stay, i) => {
                        let keyValue = Date.now() + i;
                        return <StaysCard key={keyValue} stay={stay} />
                    })}
            </div>
        </main>
    )
}

export default App;