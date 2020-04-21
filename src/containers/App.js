import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox.js'
import {robots} from '../robots'
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends React.Component{
	constructor(){
		super();

		this.state={
			robots: robots,
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users => this.setState({robots: users}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		let {robots, searchfield} = this.state
		const filtedRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase()));

		return !robots.length ? 
		<h1>Loding...</h1>: 
		(
		<div className='tc'>
			<h1 className='f1'>Robot Friends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
				<ErrorBoundary>
		  			<CardList robots={filtedRobots} />
		  		</ErrorBoundary>
		  	</Scroll>
		</div>
				);
	}
}

export default App