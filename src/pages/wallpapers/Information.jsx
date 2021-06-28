import React from 'react';
import AllPhotos from '../../data/LoadImages.js';
import WallpaperDisplay from '../../components/WallpaperDisplay.jsx';

const InfoPhotos = AllPhotos.InfoPhotos;

const Information = () => {
	return (
		<div className="CategoryContainer">
			{
				InfoPhotos.map((el, i) => (
					<WallpaperDisplay key={el.id} data={el} folder="Information" />
				))
			}
		</div>
	)
}

export default Information;