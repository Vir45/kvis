import React from 'react';

import './WorkPosition.css';


export default function WorkPosition({ setAnswer, data }) {

	const handleChange = (e) => {
		const button = e.target.closest('.positionButton');
		if (button) {
			const arrOfElem = Array.from(document.body.querySelectorAll('.positionRadio'));
			arrOfElem.forEach((item) => {
				item.classList.remove('activeRadio');
			});
			const currentElem = button.querySelector('.positionRadio');
			currentElem.classList.add('activeRadio');
			setAnswer(button.value)
		}
		button.blur()
	}

	return (
		<React.Fragment>
			<button className="radioButton positionButton" onClick={handleChange} value={data[0]}>
				<div className="radioContainer">
					<div className="radio positionRadio" />
				</div>
				<span className="position">{data[0]}</span>
			</button>
			<button className="radioButton positionButton" onClick={handleChange} value={data[1]}>
				<div className="radioContainer">
					<div className="radio positionRadio" />
				</div>
				<span className="position">{data[1]}</span>
			</button>
			<button className="radioButton positionButton" onClick={handleChange} value={data[2]}>
				<div className="radioContainer">
					<div className="radio positionRadio" />
				</div>
				<span className="position">{data[2]}</span>
			</button>
		</React.Fragment>
	)
};
