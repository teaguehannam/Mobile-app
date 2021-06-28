import React from 'react';
import AllPhotos from '../../data/LoadImages.js';
import WallpaperDisplay from '../../components/WallpaperDisplay.jsx';

const UniversePhotos = AllPhotos.Universe;

const Universe = () => {
	return (
		<div className="CategoryContainer">
			{
				UniversePhotos.map((el, i) => (
					<WallpaperDisplay key={el.id} data={el} folder="Universe" />
				))
			}
		</div>
	)
}

export default Universe;