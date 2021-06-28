import React from 'react';

// Data
import HikingPlaces from '../../data/loadHiking.js';
import HikingSpot from '../../components/HikingSpot.jsx';

const Colorado = () => {

	return (
		<div className="ColoradoContainer">			

			{
				HikingPlaces['Colorado'].map((place, i) => (
					<HikingSpot data={place} key={i}  />
				))
			}

		</div>
	)
}

export default Colorado;