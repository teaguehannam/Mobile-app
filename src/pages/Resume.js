import React from 'react';
import TeagueResume from '../resources/Teague Resume.pdf';

const Resume = () => {
	return (
		<div className="Resume" style={{height: "100vh", width: "100vw"}}>

			<embed src={TeagueResume} style={{height: "100%", width: "100%" }}/>

		</div>
	)
}

export default Resume;