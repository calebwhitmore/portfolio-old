import React, { Component } from 'react'

import Project from '../Project/Project'

class Iris extends Component{

	constructor(props) {
		super(props);
		this.state = {
			project: {
				title: 'Iris',
				image: require('./assets/iris.png'),
				imageAlt: 'lamp',
				imageBg: require('./assets/irisBg.png'),
				imageBgAlt: 'hand reaching for lamp',
				route: '/iris',
				class: 'one',
				description: "<span>Iris</span> integrates a single iris diaphragm into the head of a <span>desk lamp</span>, allowing for direct manipulation of the light <span>exiting its parabola.</span>",
				explanation: "Inspired by the machanism that controls aperture, this project took a novel approach to how a lamp can facilitate its use to control different types of lighting.<br/><br/> I was really interested in the mechanism of an iris diaphragm, and wondered if instead of controlling the light entering a system - could the mechanism be used to control the light going out?<br/><br/>Sketches were used as a tool for initial form finding. By using a circular array of ribs at the head of the lamp, a hand would be able to easily grip and twist the head to adjust the aperture. <br/><br/>The mechanism was developed through a series of lasercut prototypes. The final model was fully functioning: allowing people to control the light exiting it's parabola with a twist.",
				id: 1,
				doesShow: false,
				projectImages: [
					{
						src: require('./assets/sketches.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/prototype1.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/prototype2.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/prototype3.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/prototype4.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/exploded.jpg'),
						alt:'',
						class: 'fullWidth'
					},
				]
			}
		}
	}

	render() {
		return(
				<Project project={this.state.project} />
		)
	}
}

export default Iris