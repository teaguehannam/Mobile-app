import React from 'react';

// Icons
import Email from '../resources/icons/email.svg';
import Github from '../resources/icons/github.png';
import LinkedIn from '../resources/icons/linkedin.svg';
import SoundCloud from '../resources/icons/soundcloud.svg';
import Spotify from '../resources/icons/spotify.svg';
import Youtube from '../resources/icons/youtube.svg';
import Back from '../resources/icons/back.svg';

const Connect = (props) => {
	return (
		<div className="ConnectContainer">

			<div className="Links">

				<a className="Spotify" href="https://open.spotify.com/user/teague94" 
					target="_blank" rel="noopener noreferrer">
					<img src={Spotify} alt="Spotify" />
				</a>				
				<a className="Github" href="https://github.com/teaguehannam" 
					target="_blank" rel="noopener noreferrer">
					<img src={Github} alt="Github" />
				</a>
				<a className="SoundCloud" href="https://soundcloud.com/teayo/" 
					target="_blank" rel="noopener noreferrer">
					<img src={SoundCloud} alt="SoundCloud" />
				</a>
				<a className="LinkedIn" href="https://www.linkedin.com/in/teague-hannam-profile/" 
					target="_blank" rel="noopener noreferrer">
					<img src={LinkedIn} alt="LinkedIn" />
				</a>
				<a className="Youtube" href="https://www.youtube.com/channel/UCZOwiWmYnooVVsVAYmewOhg"
					target="_blank" rel="noopener noreferrer">
					<img src={Youtube} alt="Youtube" />
				</a>
				<a className="Email" href="/connect/email">
					<img src={Email} alt="Email" />
				</a>
				<div className="Goback" onClick={props.history.goBack} >
					<img src={Back} alt="Back" />
				</div>

			</div>

		</div>
	)
}

export default Connect;