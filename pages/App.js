import React, { useState, useEffect } from 'react';
import staysData from '../stays.json';
import StaysCard from '../components/StaysCard';
// import Form from '../components/Form';
import LocForm from '../components/LocForm';
import Modal from '../components/Modal';

function App() {
    let data = staysData;
    const [stays, setStays] = useState([]);
    const [cities, setCities] = useState('');
    const [guest, setGuest] = useState('');
    const [show, setShow] = useState(false);

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

    const openModal = () => setShow(true);

    const closeModal = () => setShow(false);
    
    // const handleSubmit = (e) => {
    //     console.log(e);
    //     // e.preventDefault();
    //     // // setCities(e.target)
    //     // console.log(e.target);
    //     // setShow(false)
    // }
    
    // console.log(handleSubmit());

    return (
        <main className="main">
            <header className="header">
                <h1 className="heading">Hello world</h1>
                {/* <Form handleGuest={handleGuest} handleSelect={handleSelect} openModal={openModal} /> */}
                <LocForm openModal={openModal} handleSelect={handleSelect} />

                <Modal closeModal={closeModal} show={show} handleGuest={handleGuest} handleSelect={handleSelect} openModal={openModal} setShow={setShow}/>
            </header>
            <div>
                <h2>Stays in Finland</h2>
                <p>{stays ? stays.length || data.length : data.length} Stays</p>
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