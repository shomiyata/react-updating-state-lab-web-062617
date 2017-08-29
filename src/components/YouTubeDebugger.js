// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

	state = {
			errors: [], 
			user: null, 
			settings:{
				bitrate: 8,
					video:{
						resolution: '1080p'
					} 
				}
			}

	handleClickBitrate = () => {
		this.setState({
			settings:{
				bitrate: 12,
				video:{
					...this.state.settings.video,
				}
			}
		})
	}

	handleClickRes = () =>{
		this.setState({
			settings:{
				...this.state.settings,
				video:{
					resolution: '720p'
				}
			}
		})
	}

	render(){
		return (<div>
			<button className='bitrate' onClick={this.handleClickBitrate}></button>
			<button className='resolution' onClick={this.handleClickRes}></button>
			</div>
		)
	}
}