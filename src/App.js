// Main App (Web map)
import React from 'react';
import { Route } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';

import Content from './pages/Content.js';
import Connect from './pages/Connect.js';
import Email from './pages/Email.js';
import Music from './pages/Music.js';

import Settings from './pages/Settings.js';

import Hiking from './pages/Hiking.js';
import Colorado from './pages/hiking/Colorado.js';
import Montana from './pages/hiking/Montana.js';

import Projects from './pages/Projects.js';
import UserApi from './pages/project/UserApi.js';
import MicroNutrition from './pages/project/MicroNutrition.js';
import Website from './pages/project/Website.js';
import LofiYouTube from './pages/project/LofiYouTube.js';

import Wallpapers from './pages/Wallpapers.js';
import Animal from './pages/wallpapers/Animal.js';
import Information from './pages/wallpapers/Information.js';
import Places from './pages/wallpapers/Places.js';
import Universe from './pages/wallpapers/Universe.js';

function App() {

	let cookieTheme = reactLocalStorage.get('Theme');
	let currentTheme = document.getElementsByTagName("body")[0].className;

	// Body class doesn't match localStorage theme
	if(cookieTheme != currentTheme) {
		document.getElementsByTagName("body")[0].classList.remove(currentTheme);
		document.getElementsByTagName("body")[0].classList.add(cookieTheme);
	}

	// Theme not set (initial visit)
	if(reactLocalStorage.get('Theme') == null ) {
		reactLocalStorage.set('Theme', 'Light');
		document.getElementsByTagName("body")[0].classList.add('Light');
	}	

	return (
		<div className="App">
			<Route path="/" component={Navigation} />
			<Route exact path="/" component={Home} />
			<Route exact path="/content" component={Content} />
			<Route exact path="/settings" component={Settings} />
			<Route exact path="/connect" component={Connect} />
			<Route exact path="/connect/email" component={Email} />
			
			<Route exact path="/hiking" component={Hiking} />
			<Route exact path="/hiking/colorado" component={Colorado} />
			<Route exact path="/hiking/montana" component={Montana} />

			<Route exact path="/music" component={Music} />
			<Route exact path="/wallpapers" component={Wallpapers} />
			<Route exact path="/wallpapers/animal" component={Animal} />
			<Route exact path="/wallpapers/information" component={Information} />
			<Route exact path="/wallpapers/places" component={Places} />
			<Route exact path="/wallpapers/universe" component={Universe} />
		</div>
	);
}

export default App;
