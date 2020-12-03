import React from 'react';

import AllPhotos from '../../data/LoadImages.js';
import WallpaperDisplay from '../../components/WallpaperDisplay.js';

const HumanPhotos = AllPhotos.HumanPhotos;

const Human = () => {

	return (
		<div className="CategoryContainer">

			{
				HumanPhotos.map((el, i) => (
					<WallpaperDisplay key={el.id} data={el} folder="Human" />
				))
			}

		</div>
	)
}

export default Human;