import React from 'react';

import leftImage from './Assets/Icon/leftImage.png';
import rightImage from './Assets/Icon/rightImage.png';
import ellips from './Assets/Icon/ellips.png';
import firstSky from './Assets/Icon/firstSky.png';
import secondSky from './Assets/Icon/secondSky.png';
import thtirdSky from './Assets/Icon/thtirdSky.png';
import forth from './Assets/Icon/forth.png';
import imageBackGround from './Assets/Icon/imageBackGround.png';

import './App.css';
import Header from './Components/Header/Header';
import Answers from './Components/Answers/Answers';
import QuestionFrom from './Components/QuestionForm/QuestionForm';
class App extends React.Component {
	render() {
		return (
			<div className="wrapper" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${imageBackGround})` }}>
				<header className="header">
					<Header />
				</header>
				<main className="main">
					<Answers />
					<QuestionFrom />
				</main>
				<img src={firstSky} alt={firstSky} className="skyImage" />
				<img src={secondSky} alt={secondSky} className="skyImage" />
				<img src={thtirdSky} alt={thtirdSky} className="skyImage" />
				<img src={forth} alt={forth} className="skyImage" />
				<img src={ellips} alt={ellips} className="ellipsCenterImage" />
				<img src={leftImage} alt={leftImage} className="leftBottomImage" />
				<img src={rightImage} alt={rightImage} className="rightBottomImage" />
			</div>

		)
	}
};

export default App;
