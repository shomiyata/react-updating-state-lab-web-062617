// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{

	state = {
		timesClicked: 0
	}

	addClick = () => {
		this.setState({
		timesClicked: ++this.state.timesClicked
		})
	}

	render(){
		return <button onClick={this.addClick}>{this.state.timesClicked}</button>
	}
}