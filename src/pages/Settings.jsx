// Navigate to type of content
import React from 'react';

import Theme from '../components/settings/Themes.jsx';
import Background from '../components/settings/Background.jsx';

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
