// Navigate to type of content
import React from 'react';

import Theme from '../components/settings/Themes.js';
import Background from '../components/settings/Background.js';

function SettingsContainer() {
	return (
		<div className="SettingsContainer">			

			<div className="Box">
				<h4 className="ThemeTitle">Theme</h4>
				<Theme />
			</div>
			

		</div>
	);
}

export default SettingsContainer;
