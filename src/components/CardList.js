import React from 'react'
import Card from './Card.js'
//import {robots} from './robots.js'

const CardList = ({robots}) => { 
	const robotsArray = robots.map((user, i) =>  <Card key = {i} id={user.id} name={user.name} email={user.email} />);

	return (
		<div>
			{robotsArray}
		</div>
		)
}

export default CardList