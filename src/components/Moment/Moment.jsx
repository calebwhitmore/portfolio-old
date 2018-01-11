import React, { Component } from 'react'
import Project from '../Project/Project'

//imports the 'Project' Module to re-use code to render project, feeding state as an array named 'project'

class Moment extends Component{

	constructor(props) {
		super(props);
		this.state = {
			project: {
				title: 'Moment',
				image: require('./assets/moment.png'),
				imageAlt: 'Watch',
				imageBg: require('./assets/momentBg.png'),
				imageBgAlt: 'hand reaching for lamp',
				route: '/Moment',
				class: 'one',
				description: "What if you could <span>wear your schedule on your wrist?</span> Moment re-imagines the way we keep time, and what we do with it. The result is a <span>watch</span>, and an <span>app.</span>",
				explanation: "Life is becoming busier. Keeping on top of our daily schedules is tough; all too often I find myself being late for meetings, or forgetting about that coffee date that I set up with a friend. Moment seeks to remedy this by integrating your schedule into a watch, so you can wear it on your wrist. <br/><br/>The LED ring around its outer dial conveys different events over the next 12 hours, split into three coloured categories: social, work and personal. Twisting the outer dial clockwise, or anticlockwise, allows you to view a 12 hour period in the future or in the past. This aims to provide a visual cue as to what those events might be, as well as letting you view how you've spent your time (through the app) at a later date. Light from the LED ring is emitted from behind a series of small, machined holes around the dial of the watch. Subtly machined recesses around the crown and dial assist with grip.<br/><br/>Two bodies for the watch were designed: one with lugs and one without. The lugless version is an excersise in simplicity; whilst the lugs give seek to give it's counterpart a more masculine, robust form.",
				id: 2,
				doesShow: false,
				projectImages: [
					{
						src: require('./assets/busierLifestyles.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/process1.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/birdseyeLuggedLugless.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/blackOpposite2.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/squareLugless.jpg'),
						alt:'',
						class: 'halfWidth'
					},
					{
						src: require('./assets/squareLugged.jpg'),
						alt:'',
						class: 'halfWidth'
					},
					{
						src: require('./assets/blackDetail.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/curvedStrap.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/context.jpg'),
						alt:'',
						class: 'fullWidth'
					},
					{
						src: require('./assets/squareDetail1.jpg'),
						alt:'',
						class: 'halfWidth'
					},
					{
						src: require('./assets/squareDetail2.jpg'),
						alt:'',
						class: 'halfWidth'
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

export default Moment