import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
	render () {
		return(
			<div className='intro card'>
				<div className='contain'>
					<h1><span className='home'>Hi there </span><span aria-label="Wave emoji"role="img">👋</span></h1><h1> I’m <span >Caleb</span>: a designer who specialises in <span>User Experience</span> and is schooled in<span> industrial design.</span> I work on software for microprocessors. 
					</h1>
					<div className='illustration'>
						<img alt="Profile illustration" src={require("./assets/profile.svg")}/>
						<img alt="Profile eyebrow" className="eyebrow" src={require("./assets/eyebrow.svg")} />
						<img alt="Profile eyes" className="eyes paralax2" src={require("./assets/eyes.svg")} />
					</div>
				</div>
			</div>
		);
	}
}

export default Header