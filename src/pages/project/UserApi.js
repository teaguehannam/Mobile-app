import React from 'react';

const UserAPI = () => {

	return (
		<div className="UserApiContainer">

			<div className="Title">
				<h2>User API</h2>
				<p>11/13/2020</p>
			</div>

			<div className="Article">
				<div className="Intro">
					<p>All social platforms</p>
					<p>in one location</p>
				</div>
				<div className="Goal">
					<h5>The Goal</h5>
					<p>Any type of media</p>
					<p>User owned data</p>
				</div>
				<div className="Support">
					<div className="Box">
						<h4 className="Launch">Launch</h4>
						<p>Soundcloud</p>
						<p>Spotify APIs</p>
					</div>
					<div className="Box">
						<h4 className="Version1">Version 1</h4> 
						<p>User Registration</p>
						<p>Profile Version 1</p>
					</div>
					<div className="Box">
						<h4 className="Version2">Version 2</h4>
						<p><a href="/project/lofi-youtube">Lofi YouTube</a></p>
						<p>User Notes</p>
					</div>
					<div className="Box">
						<h4 className="Version3">Version 3</h4>
						<p>Media Storage</p>
						<p>Profile Version 2</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default UserAPI;