import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{
	render () {
		return(
			<div className="outro card">
				<div className="contain">
					<h2>All content copyright © 2017 Caleb Whitmore
					</h2>
					<a href="https://www.instagram.com/calebwhitmore/">Instagram</a>
					<a href="https://dribbble.com/CalebWhitmore">Dribble </a>
					<a href="https://www.linkedin.com/in/caleb-whitmore/">LinkedIn</a>
					<div className="illustration">
						<img alt="Profile feet" src={require("./assets/legs.svg")} />
						<img alt="Profile left foot" className="rightFoot" src={require("./assets/rightFoot.svg")} />
					</div> 
				</div>
			</div>
		);
	}
}

export default Footer 