import React from 'react';

import Photo from '../resources/icons/photo.svg';

function WallpaperDisplay(props) {
	console.log("WallpaperDisplay", props);
	
	return (
		<div className="WallpaperDisplayContainer">

			<div>
				<img alt="imgsrc" src={Photo} />
			</div>
{/*
			<img alt="imgsrc" src={require('../resources/wallpapers/' + props.folder + '/' + props.data.src)} />
*/}

		</div>
	);
}

export default WallpaperDisplay;
