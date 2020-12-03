// Navigate to type of content
import React from 'react'; 
import SettingsSVG from '../resources/icons/options.svg'; 
import ConnectSVG from '../resources/icons/connect.svg'; 
import MessageSVG from '../resources/icons/email.svg'; 

function Content() {
	return (
		<div className="ContentContainer">			

			<a 	href="/connect" 
				className="Connect Icon">
					<img src={ConnectSVG} alt="Connect" />
			</a>
			<a 	href="/connect/email" 
				className="Message Icon">
					<img src={MessageSVG} alt="Message" />
			</a>
			<a 	href="/settings" 
				className="Settings Icon">
					<img src={SettingsSVG} alt="Settings" />
			</a>
			<a 	href="/wallpapers" 
				className="Wallpapers Bg">
					<h3>Wallpapers</h3>
			</a>
			<a 	href="/project" 
				className="Projects Bg">
					<h3>Projects</h3>
			</a>
			<a 	href="/music" 
				className="Music Bg">
					<h3>My Music</h3>
			</a>
			<a 	href="/hiking" 
				className="Hiking Bg">
					<span className="Hike1"><h3>Hike</h3></span>
					<span className="Hike2"><h3>Take a hike</h3></span>
			</a>
			<a 	href="/portfolio" 
				className="Portfolio Bg">
					<h3>Web Portfolio</h3>
			</a>

		</div>
	);
}

export default Content;
