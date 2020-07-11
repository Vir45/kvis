import React from 'react';

import './NextQuestion.css';
import arrow from '../../../Assets/Icon/arrow.svg';


export default function NextQuestion({ setNextStep, value, index }) {

	const buttonRef = React.createRef(null);
	let buttonClass = index > 2 ? 'buttonLong' : 'button';
	let buttonElementClass = index > 2 ? 'buttonElementLong' : 'buttonElement';

	const handleChange = () => {
		buttonRef.current.blur();
		setNextStep();
	}

	return (
		<div className={buttonElementClass} onClick={handleChange}>
			<button className={buttonClass} ref={buttonRef}>
				{value}
				{index <= 2 ? <img src={arrow} alt="arrow" className="imageNext" /> : null}
			</button>
		</div >
	)
};

