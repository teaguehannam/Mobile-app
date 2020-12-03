import React from 'react';

const HikingSpot = (props) => {
	console.log("HikingSpot", props.data);

	let directionsLink = "https://www.google.com/maps/search/" + props.data.coordinates;

	return (
		<div className="HikingSpotContainer">			

			<div className="Title">
				<h3>{props.data.name}</h3>
				<p>{props.data.difficulty}</p>
			</div>

			<img src={props.data.img} alt="Summit"/>

			<div className="Links">
				<a className="AllTrails" href={props.data.alltrails}>
					All Trails
				</a>
				<a className="ThreeSixty" href={props.data.img_sphere}>
					360 view
				</a>
				<a className="Directions" href={directionsLink}>
					Directions
				</a>
			</div>

		</div>
	)
}

export default HikingSpot;