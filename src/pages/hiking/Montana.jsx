import React from 'react';

// Data
import HikingPlaces from '../../data/loadHiking.js';
import HikingSpot from '../../components/HikingSpot.jsx';

const Montana = () => {

	return (
		<div className="MontanaContainer">

			{
				HikingPlaces['Montana'].map((place, i) => (
					<HikingSpot data={place} key={i}  />
				))
			}

		</div>
	)
}

export default Montana;