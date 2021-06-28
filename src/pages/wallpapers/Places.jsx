import React from 'react';
import AllPhotos from '../../data/LoadImages.js';
import WallpaperDisplay from '../../components/WallpaperDisplay.jsx';

const PlacesPhotos = AllPhotos.PlacesPhotos;

const Places = () => {
	return (
		<div className="CategoryContainer">
			{
				PlacesPhotos.map((el, i) => (
					<WallpaperDisplay key={el.id} data={el} folder="Places" />
				))
			}
		</div>
	)
}

export default Places;