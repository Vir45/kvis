import React from 'react';

import './Question.css';
import WorkPosition from '../WorkPosition/WorkPosition';
import CommunicationMeans from '../CommunicationMeans/CommunicationMeans';


export default function Question({ data, setAnswer, index, setNextStep }) {
	const { questionNumber, text, activeText, placeHolder } = data;

	const handleChange = (e) => {
		if (index <= 1) {
			const value = e.target.value;
			const result = value.replace(/,/, '.')
			setAnswer(result);
		} else if (index >= 2) {
			setAnswer(e)
		}
	}

	const textClassname = index <= 2 ? 'text' : 'longText';

	return (
		<div className="questionElement">
			{index <= 2 ? <h2 className="questionNumber">{questionNumber}</h2> : null}
			<div className={textClassname}>
				{text}
				<span className="activeText">
					{activeText}
				</span>
			</div>
			{index === 0 ? <input type='text' placeholder={placeHolder} onChange={handleChange} className="inputStyle" /> : null}
			{index === 1 ? <input type='text' placeholder={placeHolder} onChange={handleChange} className="inputStyle" /> : null}
			{index === 2 ? <WorkPosition data={data.list} setAnswer={handleChange} /> : null}
			{index === 3 ? <CommunicationMeans data={data.list} setAnswer={handleChange} /> : null}
		</div >
	)
};

