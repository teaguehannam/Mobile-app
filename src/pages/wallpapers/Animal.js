import React from 'react';
import AllPhotos from '../../data/LoadImages.js';
import WallpaperDisplay from '../../components/WallpaperDisplay.js';

const AnimalPhotos = AllPhotos.AnimalPhotos;

const Animal = () => {
	return (
		<div className="CategoryContainer">
			{
				AnimalPhotos.map((el, i) => (
					<WallpaperDisplay key={el.id} data={el} folder="Animal" />
				))
			}
		</div>
	)
}

export default Animal;