import React from 'react';
import StaysCard from '../components/StaysCard';

function StaysList(props) {
    const { stays } = props
	return (
		<main>
            <div>
                <h2>Stays in Finland</h2>
                <p>{stays.length} Stays</p>
            </div>
                <div className="container">
                {stays.map(stay => 
                    <StaysCard key={stay.id} stay={stay} />
                )} 
            </div>
		</main>
	);
}

export default StaysList;