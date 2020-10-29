import React, { useState } from 'react';
import Modal from './Modal';

function Filters({ cities, setCities, guest, setGuest, }) {

	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<div className="filters">
				<span>Location : {cities}</span>
				<span>Guests : {guest.adult + guest.children}</span>
				<button onClick={() => setIsShow(!isShow)}>Search</button>
				{isShow && (
					<Modal
						setIsShow={setIsShow}
						isShow={isShow}
						cities={cities} 
                        setCities={setCities}
                        guest={guest} 
                        setGuest={setGuest}
					/>
				)}
			</div>
		</>
	);
}

export default Filters;

// function LocForm(props) {
//     const { openModal, show, handleSelect } = props;
//     return (
//     <div>
//         {!show && <button className="filter_location" type="button" onClick={openModal}>
//         </button>}
//         {! show && <button className="filter_guest" onClick={openModal} type="button" >Add a guest
//         </button>}
//         <button className="search" type="button" >Search</button>
//     </div>
//     )
// }


// export default LocForm;