import React from 'react';

const Intro = () => {

	return (
		<div className="IntroContainer">			

			<div className="Title">
				<h2>Hello, my name is </h2>
				<h1>Teague Hannam</h1>
			</div>

			<div className="Intro">
				<p>I enjoy building great user experiences</p>
				<p>If you are looking for a web developer...</p>
				<div className="Links">
					<a href="/portfolio">View projects</a>
					<a href="/connect/email">Message me</a>
				</div>
			</div>

		</div>
	)
}

export default Intro;