import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Arpd from '../resources/music/Arp\'d.mp3';
import Astro from '../resources/music/Astro.mp3';
import Astroof from '../resources/music/Astroof.mp3';
import Bitoku from '../resources/music/Bitoku.mp3';
import BlueSky from '../resources/music/Blue Sky.mp3';
import DanG from '../resources/music/Dan G.mp3';
import Don from '../resources/music/Don.mp3';
import Electrofluid from '../resources/music/Electrofluid.mp3';
import Foz from '../resources/music/Foz.mp3';
import GrassThemeRemix from '../resources/music/Grass Theme Remix.mp3';
import GrassTheme from '../resources/music/Grass Theme V1.mp3';
import Grow from '../resources/music/Grow.mp3';
import MountainGrass from '../resources/music/Mountain Grass Pass.mp3';
import NiceMusic from '../resources/music/Nice Music 01.mp3';
import Octa from '../resources/music/Octa.mp3';
import Prime8 from '../resources/music/Prime8.mp3';
import Radiation from '../resources/music/Radiation.mp3';
import Raw from '../resources/music/Raw.mp3';
import Sav2 from '../resources/music/Sav2.mp3';
import Serine from '../resources/music/Serine.mp3';
import Shop from '../resources/music/Shop.mp3';
import Strone from '../resources/music/Strone.mp3';
import SubTest from '../resources/music/Sub Test.mp3';
import TeayoBeats2 from '../resources/music/TeayoBeats 2.mp3';
import TooMASH from '../resources/music/Too MASH.mp3';
import Trapsmanship from '../resources/music/Trapsmanship.mp3';
import Whostle from '../resources/music/Whostle.mp3';
import Woob from '../resources/music/Woob.mp3';

const Music = () => {

	return (
		<div className="MusicContainer">
			
			<div className="Title">
				<h2>Music by Teague</h2>
			</div>

			<div className="Box"><h4>Apr'd</h4><ReactAudioPlayer src={Arpd} controls /></div>
			<div className="Box"><h4>Astro</h4><ReactAudioPlayer src={Astro} controls /></div>
			<div className="Box"><h4>Astroof</h4><ReactAudioPlayer src={Astroof} controls /></div>
			<div className="Box"><h4>Bitoku</h4><ReactAudioPlayer src={Bitoku} controls /></div>
			<div className="Box"><h4>BlueSky</h4><ReactAudioPlayer src={BlueSky} controls /></div>
			<div className="Box"><h4>Dan G</h4><ReactAudioPlayer src={DanG} controls /></div>
			<div className="Box"><h4>Don</h4><ReactAudioPlayer src={Don} controls /></div>
			<div className="Box"><h4>Electrofluid</h4><ReactAudioPlayer src={Electrofluid} controls /></div>
			<div className="Box"><h4>Foz</h4><ReactAudioPlayer src={Foz} controls /></div>
			<div className="Box">
				<a href="https://www.youtube.com/watch?v=wmzlgtJPx6Q">
					<h4>Grass Theme</h4>
				</a>
				<ReactAudioPlayer src={GrassTheme} controls />
			</div>
			<div className="Box"><h4>Grass Theme Remix</h4><ReactAudioPlayer src={GrassThemeRemix} controls /></div>
			<div className="Box"><h4>Grow</h4><ReactAudioPlayer src={Grow} controls /></div>
			<div className="Box"><h4>Mountain Grass Pass</h4><ReactAudioPlayer src={MountainGrass} controls /></div>			
			<div className="Box"><h4>Nice Music 01</h4><ReactAudioPlayer src={NiceMusic} controls /></div>
			<div className="Box"><h4>Octa</h4><ReactAudioPlayer src={Octa} controls /></div>
			<div className="Box"><h4>beat ft. Prime8</h4><ReactAudioPlayer src={Prime8} controls /></div>
			<div className="Box"><h4>Radiation</h4><ReactAudioPlayer src={Radiation} controls /></div>
			<div className="Box"><h4>Raw</h4><ReactAudioPlayer src={Raw} controls /></div>
			<div className="Box"><h4>Sav2</h4><ReactAudioPlayer src={Sav2} controls /></div>
			<div className="Box"><h4>Serine</h4><ReactAudioPlayer src={Serine} controls /></div>
			<div className="Box">
				<a href="https://www.youtube.com/watch?v=kx8af6vE3Rc">
					<h4>Shop</h4>
				</a>
				<ReactAudioPlayer src={Shop} controls />
			</div>
			<div className="Box"><h4>Strone</h4><ReactAudioPlayer src={Strone} controls /></div>
			<div className="Box"><h4>SubTest</h4><ReactAudioPlayer src={SubTest} controls /></div>
			<div className="Box"><h4>TeayoBeats2</h4><ReactAudioPlayer src={TeayoBeats2} controls /></div>
			<div className="Box"><h4>Too MASH</h4><ReactAudioPlayer src={TooMASH} controls /></div>
			<div className="Box"><h4>Trapsmanship</h4><ReactAudioPlayer src={Trapsmanship} controls /></div>
			<div className="Box"><h4>Whostle</h4><ReactAudioPlayer src={Whostle} controls /></div>
			<div className="Box"><h4>Woob</h4><ReactAudioPlayer src={Woob} controls /></div>

		</div>
	)
}

export default Music;