import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
	const { name, age, height } = props
	const { names } = props
	return (
		<div>
			<h2>{`${name} ${age} ${height}`}</h2>
			<ul>
				{
					names.map((item, index) => {
						return <li>{item}</li>
					})
				}
			</ul>
		</div>
	)
}

// class childCpn2 extends Component {
// 	// es6中的calss fields写法
// 	static propTypes = {

// 	}

// 	static defaultProps = {

// 	}

// }

ChildCpn.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	height: PropTypes.number,
	names: PropTypes.array
}

ChildCpn.defaultProps = {
	name: 'zytqyb',
	age: 30,
	height: 1.90,
	names: ["aaa", "bbb"]
}

export default class App extends Component {
	render() {
		return (
			<div>
				<ChildCpn name="zytqyb" age={18} height={1.70} names={[1, 2, 3, 4]} />
				<ChildCpn name="qyb" age={18} height={1.70} names={[1, 2, 3, 4]} />
				<ChildCpn />
			</div>
		)
	}
}
