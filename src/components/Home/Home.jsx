import React, { Component } from 'react'
import './Home.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'
import Iris from '../Iris/Iris'

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { 
            projects: this.props.projects
        },
		require('./Home.scss');
	}

	render () {
		return (
			<div className="wrap">
				<Header />
				<Portfolio />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Home;