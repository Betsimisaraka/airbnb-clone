import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../components/Form';

// import React, { useState, useEffect } from 'react';
// import '../styles/FilterModal.scss';

function Modal({
    cities, 
    setCities, 
    guest, 
    setGuest,
    setIsShow,
}) {
	function handleSubmit(e) {
		e.preventDefault();
		setIsShow(false);
	}

	function handleClickOutside(e) {
		const isOutside = !e.target.closest('.inner-modal');
		if (isOutside) {
			setIsShow(false);
		}
	}

	// we want to change the state for guestFilter attribute
	// function handleGuest(type, operation) {
	// 	if (operation === '-') {
	// 		// guestFilter.adult / guestFilter.children
	// 		if (guest[type] > 0) {
	// 			setGuest({ ...guest, [type]: guest[type] - 1 });
	// 		} else {
	// 			return;
	// 		}
	// 	} else {
	// 		// we need to spread the rest of the object, because we don't want to loose the other attributes
	// 		setGuest({
	// 			...guest,
	// 			[type]: guest[type] + 1,
	// 		});
	// 	}
	// }

	function handleAdultGuest(operation) {
		if (operation === '-') {
			if (guest.adult > 0) {
				setGuest({ adult: guest.adult - 1, children: guest.children });
			} else {
				return;
			}
		} else if (operation === '+') {
			setGuest({ adult: guest.adult + 1, children: guest.children });
		}
	}

	function handleChildrenGuest(operation) {
		if (operation === '-') {
			if (guest.children > 0) {
				setGuest({ adult: guest.adult, children: guest.children - 1 });
			} else {
				return;
			}
		} else {
			setGuest({ adult: guest.adult, children: guest.children + 1 });
		}
	}

	return (
		<div onClick={handleClickOutside} className="outer-modal">
			<div className="inner-modal">
				<form onSubmit={handleSubmit}>
					<div className="location">
						<div className="location-input">
							<span>Location</span>
							<span>{cities ? cities : 'All'}</span>
						</div>
						<div className="location-picker">
							<button type="button" onClick={() => setCities('')}>
								All cities
							</button>
							<button type="button" onClick={() => setCities('Helsinki')}>
								Helsinki, Finland
							</button>
							<button type="button" onClick={() => setCities('Turku')}>
								Turku, Finland
							</button>
							<button type="button" onClick={() => setCities('Vaasa')}>
								Vaasa, Finland
							</button>
							<button type="button" onClick={() => setCities('Oulu')}>
								Oulu, Finland
							</button>
						</div>
					</div>
					<div className="guests">
						<div className="guests-input">
							<div>Guests</div>
							{guest.adult + guest.children}
						</div>
						<div className="guests-buttons">
							<div>
								<h3>Adults</h3>
								<p>Age 13 or above</p>
								<div className="buttons">
									<button type="button" onClick={() => handleAdultGuest('-')}>
										-
									</button>
									<span>{guest.adult}</span>
									<button type="button" onClick={() => handleAdultGuest('+')}>
										+
									</button>
								</div>
							</div>
							<div>
								<h3>Children</h3>
								<p>Age 2 - 12</p>
								<div className="buttons">
									<button type="button" onClick={() => handleChildrenGuest('-')}>
										-
									</button>
									<span>{guest.children}</span>
									<button type="button" onClick={() => handleChildrenGuest('+')}>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
					<button>Search</button>
				</form>
			</div>
		</div>
	);
}

export default Modal;


// function Modal(props) {
//   const { closeModal, show, handleSelect, handleGuest, handleSubmit, openModal, setShow } = props;

//   const modal = 
//   (<>
//     <div className={show ? 'overlay' : 'hide'}>
//       <div className={show ? "modal" : "hide"}>
//         <button onClick={closeModal}>X</button>
//         <Form handleSelect={handleSelect} handleGuest={handleGuest} handleSubmit={handleSubmit} openModal={openModal} setShow={setShow} />
//       </div>
//     </div> 
//   </>)
//   return ReactDOM.createPortal(
//     modal, document.getElementById('modal_root')
//   );
// }

// export default Modal;

