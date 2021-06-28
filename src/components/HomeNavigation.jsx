import React from 'react';

// Components
import HomeSVG from '../resources/icons/home.svg'; 
import MenuSVG from '../resources/icons/menu.svg'; 
import SettingsSVG from '../resources/icons/options.svg'; 

function HomeNavigation() {
	return (
		<div className="HomeNavigationContainer">

			<nav>
				<a className="Link" href="/">
					<img src={HomeSVG} alt="Home" />
				</a>
				<a className="Link" href="/content">
					<img src={MenuSVG} alt="Menu" />
				</a>
				<a className="Link" href="/settings">
					<img src={SettingsSVG} alt="Settings" />
				</a>
			</nav>

		</div>
	);
}

export default HomeNavigation;
