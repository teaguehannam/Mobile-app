import React from 'react';
import { useHistory } from "react-router-dom";

const Hiking = () => {

	const history = useHistory();
	const Colorado = () => history.push('/hiking/colorado/');
	const Montana = () => history.push('/hiking/montana/');

	return (
		<div className="HikingContainer">	

			<div className="Box Colorado" onClick={Colorado}>
				<h2>Colorado</h2>
			</div>

			<div className="Box Montana" onClick={Montana}>
				<h2>Montana</h2>
			</div>

		</div>
	)
}

export default Hiking;