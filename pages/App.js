import React, { useState, useEffect, Children } from 'react';
import staysData from '../stays.json';
import Header from '../components/Header';
import StaysList from '../components/StaysList';

function App() {
    const [stays, setStays] = useState([]);
    console.log(stays);
    const [cities, setCities] = useState('');
    const [guest, setGuest] = useState({
        adult: 0,
        children: 0
    });

    useEffect(() => {
        staysData.forEach((stay, id) => (stay.id = Date.now() + id));
        console.log(staysData);
        setStays(staysData);
    }, [])

    function handleCities(stay) {
		if (!cities) {
			return stay;
		}
		return stay.city == cities;
    }

	function handleGuest(stay) {
		if (!guest) {
			return stay;
		}
		return stay.maxGuests > guest.adult + guest.children;
	}

    // const openModal = () => setShow(true);

    // const closeModal = () => setShow(false);


    return (
        <div className="main">
            <Header 
                cities={cities} 
                setCities={setCities}
                guest={guest} 
                setGuest={setGuest} 
            />
            <StaysList stays={stays.filter(handleCities).filter(handleGuest)}> </StaysList>
        </div>
    )
}

export default App;