import React from 'react';

import './QuestionForm.css';
import StepProgressBar from './QuestionProgress/QuestionProgress';
import Question from './Question/Question';
import NextQuestion from './NextQuestion/NextQuestion';
import data from '../../data';

export default class QuestionFrom extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			percent: 0,
			question: 0,
			answerFirstQuestion: '',
			answerSecondQuestion: '',
			answerThirdQuestion: '',
			answerFourth: {
				typeCommunication: '',
				value: ''
			}
		}
	}

	setAnswer = (e) => {
		if (this.state.question === 0) {
			this.setState({ answerFirstQuestion: e })
		} else if (this.state.question === 1) {
			this.setState({ answerSecondQuestion: e })
		} else if (this.state.question === 2) {
			this.setState({ answerThirdQuestion: e })
		} else if (this.state.question === 3) {
			this.setState({
				answerFourth: {
					typeCommunication: e.typeCommunication,
					value: e.value
				}
			})
		}
	}

	setNextStep = () => {
		if (this.state.question === 0 && this.state.answerFirstQuestion === '') {
			alert('Ответьте на первый вопрос');
			return;
		} else if (this.state.question === 0 && isNaN(Number(this.state.answerFirstQuestion))) {
			alert('Ответ должен быть числом');
			return
		} else if (this.state.question === 1 && this.state.answerSecondQuestion === '') {
			alert('Ответьте на второй вопрос');
			return;
		} else if (this.state.question === 1 && isNaN(Number(this.state.answerSecondQuestion))) {
			alert('Ответ должен быть числом');
			return
		} else if (this.state.question === 2 && this.state.answerThirdQuestion === '') {
			alert('Ответьте на третий вопрос');
			return;
		} else if (this.state.question === 3 && this.state.answerFourth.typeCommunication !== 'E-mail' && this.state.answerFourth.value.length < 12) {
			alert('Введите валидное значение номера телефона');
			return;
		} else if (this.state.question === 3 && this.state.answerFourth.typeCommunication === 'E-mail' && !this.state.answerFourth.value.includes('@')) {
			alert('Введите валидное значение адреса электронной почты');
			return;
		}

		if (this.state.question === 3) {
			alert('Ответ уже в пути');
			return;
		}

		this.setState((state) => ({
			percent: state.percent + 50,
			question: state.question + 1
		}))

	}

	render() {
		const index = this.state.question;
		return (
			<div className="questionFormContainer">
				<StepProgressBar percent={this.state.percent} />
				<div className="questionBlock">
					<Question setAnswer={this.setAnswer} data={data[index]} index={index} setNextStep={this.setNextStep} />
					<NextQuestion value={data[index].buttonTitle} index={index} setNextStep={this.setNextStep} />
				</div>
			</div>
		)
	}
};
