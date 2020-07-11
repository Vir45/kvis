import React from 'react';

import './Header.css';
import logo from '../../Assets/Icon/logo.png';

export default function Header() {
	return (
		<div className="headerContainer">
			<div className="logoContainer">
				<img src={logo} alt="Logo" />
			</div>
			<h1 className="logoDescription">
				Система комплексного мониторинга
				состояния молочных коров
			</h1>
		</div>
	)
};


