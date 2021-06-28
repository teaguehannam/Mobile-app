import React from 'react';

const MicroNutrition = () => {

	return (
		<div className="MicroNutritionContainer">

			<div className="Title">
				<h2><span>Micro</span>Nutrition</h2>
			</div>

			<div className="Intro">
				<p>Easy to use</p>
				<p>nutritional analytics</p>
			</div>

			<div className="Example">
				<h4>How?</h4>
				<p>Keep track of foods eaten</p>
				<p>Automated nutrient tracking</p>
				<p>Set custom nutrition goals</p>		
			</div>

			<div className="Data">
				<p>Data managed</p>
				<p>through <a href="/project/user-api">User API</a></p>
			</div>

		</div>
	)
}

export default MicroNutrition;