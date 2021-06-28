import React from 'react';

// Components
import BackSVG from '../resources/icons/back.svg'; 
import HomeSVG from '../resources/icons/home.svg'; 
import MenuSVG from '../resources/icons/menu.svg'; 
import SettingsSVG from '../resources/icons/options.svg'; 

function Navigation(props) {
	return (
		<div className="NavigationContainer">

			<nav>
				<div className="Link" onClick={props.history.goBack}>
					<img src={BackSVG} alt="Back" />
				</div>
				<a className="Link" href="/content">
					<img src={MenuSVG} alt="Menu" />
				</a>
				<a className="Link" href="/">
					<img src={HomeSVG} alt="Home" />
				</a>
			</nav>

		</div>
	);
}

export default Navigation;
