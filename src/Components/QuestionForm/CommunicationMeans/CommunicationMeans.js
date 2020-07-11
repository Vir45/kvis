import React from 'react';

import './CommunicationMeans.css';
import InputMask from "react-input-mask";


export default function CommunicationMeans({ setAnswer, data }) {

	const [number, setNumber] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [typeCommunication, setType] = React.useState('mobile');

	const handleChange = (e) => {
		const button = e.target.closest('.communicationButton');
		if (button) {
			const arrOfElem = Array.from(document.body.querySelectorAll('.communicationRadio'));
			arrOfElem.forEach((item) => {
				item.classList.remove('activeRadio');
			});
			const currentElem = button.querySelector('.communicationRadio');
			currentElem.classList.add('activeRadio');
			setType(button.value);

			if (button.value === 'E-mail') {
				setAnswer({
					typeCommunication: button.value,
					value: email
				});
			} else if (button.value !== 'E-mail') {
				setAnswer({
					typeCommunication: button.value,
					value: number
				});
			}
		}

		button.blur()
	}

	const handleNumber = (e) => {
		if (typeCommunication === 'E-mail') {
			setEmail(e.target.value);
			setAnswer({
				typeCommunication: typeCommunication,
				value: e.target.value
			});
			return;
		}

		const regExp = /\d/g;
		const numberMatch = e.target.value.match(regExp).join('');
		setNumber(numberMatch);
		setAnswer({
			typeCommunication: typeCommunication,
			value: numberMatch
		});
	};

	const adreeContainerMobile = (<div className="adressContainer">
		<p className="numberPlaceholder">Введите ваш номер телефона</p>
		<InputMask mask="+375 (99) 999-99-99" alwaysShowMask className="inputMask" onChange={handleNumber} value={number} />
	</div>);

	const adreeContainerEmail = (<div className="adressContainer">
		<p className="numberPlaceholder">Введите ваш e-mail</p>
		<InputMask placeholder="simple@example.com" className="inputMask" onChange={handleNumber} value={email} />
	</div>);

	return (
		<div>
			<div className="communicationcontainer">
				{data.map((item, index) => {
					let active = false;
					if (index === 0) {
						active = true;
					}
					return (<button className="radioButton communicationButton" onClick={handleChange} value={item} key={`communicationButton ${index}`}>
						<div className="radioContainer">
							{active ? <div className="radio communicationRadio activeRadio" /> : null}
							{!active ? <div className="radio communicationRadio" /> : null}
						</div>
						<span className="position">{item}</span>
					</button>
					)
				})}
			</div>
			{typeCommunication === 'E-mail' ? adreeContainerEmail : adreeContainerMobile}
		</div>
	)
};
