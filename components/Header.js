import React from 'react';
import Filters from '../components/Filters';

function Header({ cities, setCities, guest, setGuest }) {
	return (
		<header className="header">
			 <h1 className="heading">Hello world</h1>
			<Filters
				cities={cities} 
                setCities={setCities}
                guest={guest} 
                setGuest={setGuest} 
			/>
		</header>
	);
}

export default Header;
