import React from 'react';

function WallpaperDisplay(props) {
	let imgSrc = '/wallpapers/'+props.folder+'/'+props.data.src;
	console.log(props);

	return (
		<div className="WallpaperDisplayContainer">
			<img src={imgSrc} alt={props.data.src.slice(0, -4)} />
		</div>
	);
}

export default WallpaperDisplay;
