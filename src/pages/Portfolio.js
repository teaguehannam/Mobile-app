import React from 'react';

// Photos
import MarketingPhoto from '../resources/projects/MarketingPhoto.png';
import MoleculePhoto from '../resources/projects/MoleculeViewer.png';
import GameOfLifeGif from '../resources/projects/GameOfLife.gif'
import ServerIcon from '../resources/projects/ServerIcon.png';

// Icons
import CSS from '../resources/icons/Languages/CSS.svg'; 
import Git from '../resources/icons/Languages/Git.svg'; 
import HTML from '../resources/icons/Languages/HTML.svg'; 
import JavaScript from '../resources/icons/Languages/JavaScript.svg'; 
import Node from '../resources/icons/Languages/Node.svg'; 
import PHP from '../resources/icons/Languages/PHP.svg'; 
import Postgres from '../resources/icons/Languages/Postgres.svg'; 
import Python from '../resources/icons/Languages/Python.svg'; 
import ReactIcon from '../resources/icons/Languages/React.svg'; 
import Sass from '../resources/icons/Languages/Sass.svg'; 
import Solidity from '../resources/icons/Languages/Solidity.svg'; 
import Typescript from '../resources/icons/Languages/TypeScript.svg'; 


const Portfolio = () => {
	return (
		<div className="PortfolioContainer">

			<div className="Head">
				<div className="Title">
					<h2>Web Portfolio</h2>
					<div className="Separator TwoThirds" />
					<p>Experienced with</p>
				</div>

				<div className="Languages">
					<div className="HTML">
						<img src={HTML} alt="HTML" />
					</div>
					<div className="CSS3">
						<img src={CSS} alt="CSS3" />
					</div>
					<div className="Javascript">
						<img src={JavaScript} alt="Javascript" title="JavaScript"/>
					</div>
					<div className="React">
						<img src={ReactIcon} alt="React" title="React"/>
					</div>
					<div className="Sass">
						<img src={Sass} alt="Sass" title="SassScript"/>
					</div>
					<div className="Node">
						<img src={Node} alt="Node.js" title="Node"/>
					</div>
					<div className="Git">
						<img src={Git} alt="Git" title="Version Control"/>
					</div>
					<div className="Python">
						<img src={Python} alt="Python" title="Python" />
					</div>
					<div className="TypeScript">
						<img src={Typescript} alt="TypeScript" title="TypeScript" />
					</div>
					<div className="PHP">
						<img src={PHP} alt="PHP" />
					</div>
					<div className="PostGres">
						<img src={Postgres} alt="PostGres" title="SQL"/>
					</div>
					<div className="Solidity">
						<img src={Solidity} alt="Solidity" />
					</div>
				</div>
			</div>

			<div className="Separator TwoThirds" />


			<div className="Project Marketing">
				<a href="https://micronutrients.netlify.app/" target="_blank" rel="noopener noreferrer">
					<h3>Landing Page</h3>
					<img src={MarketingPhoto} alt="Marketing Website" />
				</a>
				<div className="Description">
					<p>Marketing page built in 6 hours</p>
				</div>
			</div>

			<div className="Separator TwoThirds" />

			<div className="Project WebGL">
				<a href="https://ttjs.netlify.app/" target="_blank" rel="noopener noreferrer">
					<h3>WebGL Animation</h3>
					<img src={MoleculePhoto} alt="Molecule View" />
				</a>
				<div className="Description">
					<p>3D rendering in browser</p>
				</div>
			</div>

			<div className="Separator TwoThirds" />

			<div className="Backend">
				<div className="Title">
					<h3>Back end APIs</h3>
					<img src={ServerIcon} alt="Server" />
				</div>

				<a 	href="https://quotes-db-api.herokuapp.com/" 
					target="_blank" rel="noopener noreferrer">
					<h3>Quotes</h3>
					<div className="Description">
						<p>Account and dashboard for managing quotes.</p>
					</div>
				</a>

				<a 	href="https://github.com/Lambda-School-Labs/kondoboard-backend/blob/master/README.md" 
						target="_blank" rel="noopener noreferrer">
					<h3>KondoBoard</h3>
					<div className="Description">
						<p>User/job database and API, allows users to keep track of job listings.</p>
					</div>
				</a>
			</div>

		</div>
	)
}


export default Portfolio;
