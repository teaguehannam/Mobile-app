import React, { useState, useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

function Themes() {
	let currentTheme = document.getElementsByTagName("body")[0].className;

	const [theme, setTheme] = useState({current:currentTheme});	

	React.useEffect(() => {
		reactLocalStorage.set('Theme', theme.current);
	}, [theme]);
	
	const refreshPage = () => window.location.reload(false);
	const handleChange = (e) => {
		setTheme({current: e.target.value});
		refreshPage();
	}
	const ClearCookies = () => {
		reactLocalStorage.clear();
		refreshPage();
	}


	return (
		<div className="ThemesContainer">

			<select value={theme.current} onChange={handleChange}>
				<option value="Light">Bright</option>
				<option value="SpaceGrey">Space Grey</option>
				<option value="Dark">Dark</option>
			</select>

		</div>
	);
}

export default Themes;
