import React, { Component } from 'react'

class ChildCpn extends Component {
	constructor(props) {
		super();
	}


	render() {
		const { name, age, height } = this.props
		return (
			<div>
				<h2>子组件展示数据: {`${name} ${age} ${height}`}</h2>
			</div>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<ChildCpn name="zytqyb" age="18" height="1.70" />
			</div>
		)
	}
}
