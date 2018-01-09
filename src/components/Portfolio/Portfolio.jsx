import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Portfolio.css'

class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = { 
		projects: [
			{
				title: 'Moment',
				image: require('./assets/moment.png'),
				imageAlt: 'watch',
				imageBg: require('./assets/momentBg.png'),
				imageBgAlt: 'hand holding watch',
				route: '/Moment',
				class: 'one',
				id: 0,
			},
			{
				title: 'Iris',
				image: require('./assets/iris.png'),
				imageAlt: 'lamp',
				imageBg: require('./assets/irisBg.png'),
				imageBgAlt: 'hand reaching for lamp',
				route: '/Iris',
				class: 'one',
				id: 1,
			},
			{
				title: 'Tortoise',
				image: require('./assets/tortoise.png'),
				imageAlt: 'Autonomous vehicle',
				imageBg: require('./assets/tortoiseBg.png'),
				imageBgAlt: 'Skyline',
				route: '/Tortoise',
				class: 'one',
				id: 2,
			},
			{
				title: 'Ghibli',
				image: require('./assets/ghibli.png'),
				imageAlt: 'studio ghibli illustration',
				imageBg: require('./assets/ghibliBg.jpg'),
				imageBgAlt: 'studio ghibli illustration background',
				route: '/Ghibli',
				class: 'two',
				id: 3,
			},
			{
				title: 'Erupt',
				image: require('./assets/erupt.png'),
				imageAlt: 'Erupt camping stove',
				imageBg: require('./assets/eruptBg.jpg'),
				imageBgAlt: 'Erupt camping stove background',
				route: '/Erupt',
				class: 'two',
				id: 4,
			}
		]
		}
	}
	render () {
		return(
			<div className="portfolio">
				<div className="header">
					<p>whitmo.net</p>
					<Link to="/">
					<button className="arrow invisible">
							<img alt="arrow" className="arrowUp" src={require("./assets/arrowUp.svg")} />
							<p>Home</p>
					</button>
					</ Link>
					<button className="menu">
						<div className="hamburger">
								<div className="bar1"></div>
								<div className="bar2"></div>
								<div className="bar3"></div>
						</div>
						<ul className="dropDown">
							{this.state.projects.map((project) =>
							<Link to={project.route} >
								<p>{project.title}</p>
							</Link>
							)}
						</ul>
					</button>
				</div>
				<ul className="projectList">
					{this.state.projects.map((project) =>
					<Link to={project.route} className={project.class}>
                        <img alt={project.imageAlt} src={project.image} />
                        <img alt={project.imageBgAlt} className="bg paralax" src={project.imageBg}/>
                        <h2 className="projectTitle">{project.title}</h2>
                    </Link>
					)}
				</ul>
			</div>
		);
		
	}
}

export default Portfolio