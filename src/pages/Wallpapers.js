import React from 'react';

const Wallpapers = () => {
	return (
		<div className="WallpapersContainer">

			<div className="Title">
				<h2>Wallpapers</h2>
			</div>

			<div className="Categories">
				<a href="/wallpapers/animal">
					<h3>Animal</h3>
					<p>9mb</p>
				</a>
				<a href="/wallpapers/information">
					<h3>Information</h3>
					<p>16mb</p>
				</a>
				<a href="/wallpapers/places">
					<h3>Places</h3>
					<p>86mb</p>
				</a>
				<a href="/wallpapers/space">
					<h3>Space</h3>
					<p>56mb</p>
				</a>
			</div>

			<div className="BottomText">
				<p>Data intensive</p>
				<p>Wifi reccomended</p>
			</div>	
			
		</div>
	)
}

export default Wallpapers;