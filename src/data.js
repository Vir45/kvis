const data = [
	{
		questionNumber: 'ВОПРОС 1',
		text: 'Сколько у Вас ',
		activeText: 'дойных коров?',
		placeHolder: 'Например: 45',
		list: null,
		buttonTitle: 'Далее'
	},
	{
		questionNumber: 'ВОПРОС 2',
		text: 'Сколько ',
		activeText: 'молока в сутки вы доите?',
		placeHolder: 'Например: 12',
		list: null,
		buttonTitle: 'Далее'
	},
	{
		questionNumber: 'ВОПРОС 3',
		text: null,
		activeText: 'Вы яыляетесь',
		placeHolder: null,
		list: ['Руководителем фермы', 'Зоотехником', 'Ветеренаром'],
		buttonTitle: 'Далее'
	},
	{
		questionNumber: null,
		text: null,
		activeText: 'Куда прислать вам ответ?',
		list: ['По телефону', 'E-mail', 'Viber', 'Telegram', 'Whatsaap'],
		placeHolder: 'Введите Ваш номер телефона',
		buttonTitle: 'Отправить и получить ответ'
	},
];

export default data;
