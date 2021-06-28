import React from 'react';
import { useHistory } from "react-router-dom";

const Projects = () => {

	const history = useHistory();
	const LofiYouTube = () => history.push('/project/lofi-youtube/');
	const UserApi = () => history.push('/project/user-api/');
	const MicroNutition = () => history.push('/project/micro-nutrition/');
	const ThisWebsite = () => history.push('/project/website');

	return (
		<div className="ProjectsContainer">

			<div className="Box" onClick={LofiYouTube}>
				<div className="BlogTitle">
					<h3>Lofi YouTube</h3>
				</div>
				<div className="Preview">
					<p></p>
				</div>
			</div>


			<div className="Box" onClick={UserApi}>
				<div className="BlogTitle">
					<h3>User API</h3>
				</div>
				<div className="Preview">
					<p></p>
				</div>
			</div>
			
			<div className="Box" onClick={MicroNutition}>
				<div className="BlogTitle">
					<h3>Micro-Nutition</h3>					
				</div>
			</div>

			<div className="Box" onClick={ThisWebsite}>
				<div className="Preview">
					<p>Purpose of this website</p>
				</div>
			</div>

		</div>
	)
}

export default Projects;