// Main App (Web map)
import React from 'react';
import { Route } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';

import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';

import Content from './pages/Content.jsx';
import Connect from './pages/Connect.jsx';
import Email from './pages/Email.jsx';
import Music from './pages/Music.jsx';

import Settings from './pages/Settings.jsx';

import Hiking from './pages/Hiking.jsx';
import Colorado from './pages/hiking/Colorado.jsx';
import Montana from './pages/hiking/Montana.jsx';

import Projects from './pages/Projects.jsx';
import UserApi from './pages/project/UserApi.jsx';
import MicroNutrition from './pages/project/MicroNutrition.jsx';
import Website from './pages/project/Website.jsx';
import LofiYouTube from './pages/project/LofiYouTube.jsx';

import Wallpapers from './pages/Wallpapers.jsx';
import Animal from './pages/wallpapers/Animal.jsx';
import Information from './pages/wallpapers/Information.jsx';
import Places from './pages/wallpapers/Places.jsx';
import Universe from './pages/wallpapers/Universe.jsx';

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
