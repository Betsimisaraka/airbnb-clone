import React, { useState, useEffect } from 'react';
import staysData from '../stays.json';
import StaysCard from '../components/StaysCard';
import Form from '../components/Form'

function App() {
    let data = staysData;
    console.log(data);
    const [stays, setStays] = useState(data);

    const handleSelect = (e) => {
        e.preventDefault();
      const filteredCity = setStays(data.filter(stay => {
            return stay.city.toLowerCase() === e.target.value.toLowerCase();
        }))
        return filteredCity;
    }


    console.log({handleSelect});

    return (
        <main className="main">
            <header className="header">
                <h1 className="heading">Hello world</h1>
                <Form handleSelect={handleSelect}/>
            </header>
            <div>
                <h2>Stays in Finland</h2>
                <p>12 + Stays</p>
            </div>
                <div className="container">
                {stays.map((stay, i) => {
                    let keyValue = Date.now() + i;
                    return <StaysCard key={keyValue} stay={stay} />
                })}
            </div>
        </main>
    )
}

export default App;