import React from 'react';

import './Answers.css';
import answerImg from '../../Assets/Icon/answerImg.png';

export default function Answers() {
	return (
		<div className="answerElement">
			<h3 className="answerTitle">Ответьте на 3 вопроса и узнайте</h3>
			<h3 className="answerTarget">Как <span className="answerTargetBold">увеличить удой каждой коровы
			до 15%</span> путем</h3>

			<div className="answerContainer">

				<div className="answer">
					<div className="imageContainer">
						<img src={answerImg} alt=" answerImg" />
					</div>
					<p className="answerDescription">
						<span className="answerDescriptionBold">
							Своевременного
							определения половой охоты&ensp;
						</span>
							особенно если она не заметна
							по внешним признакам
					</p>
				</div>

				<div className="answer">
					<div className="imageContainer">
						<img src={answerImg} alt="answerImg" />
					</div>
					<p className="answerDescription">
						<span className="answerDescriptionBold">
							Анализом состояния
							здоровья коровы&ensp;
						</span>
							при наблюдении за жвачкой,
							активностью и температурой тела
					</p>
				</div>

				<div className="answer">
					<div className="imageContainer">
						<img src={answerImg} alt="answerImg" />
					</div>
					<p className="answerDescription">
						<span className="answerDescriptionBold">
							Выявление хромоты&ensp;
						</span>
						предупреждением
							и выявлением развития
							хромоты
					</p>
				</div>

			</div>
		</div >
	)
};

