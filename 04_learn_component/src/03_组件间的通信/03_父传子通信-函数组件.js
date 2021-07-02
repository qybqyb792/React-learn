import React, { Component } from 'react'

function ChildCpn(props) {
	const { name, age, height } = props

	return (
		<h2>{`${name} ${age} ${height}`}</h2>
	)
}

export default class App extends Component {
	render() {
		return (
			<div>
				<ChildCpn name="zytqyb" age="18" height="1.70" />
				<ChildCpn name="qyb" age="18" height="1.70" />
			</div>
		)
	}
}
