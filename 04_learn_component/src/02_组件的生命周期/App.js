import React, { Component } from 'react'

class Cpn extends Component {
	render() {
		return (
			<div>
				我是Cpn组件
			</div>
		)
	}

	// 组件即将被移除(卸载)
	componentWillUnmount() {
		console.log("调用了Cpn的componentWillUnmount方法");
	}
}

export default class App extends Component {

	constructor() {
		super();

		console.log("执行了组建的constructor方法");

		this.state = {
			counter: 0,
			isShow: true
		}
	}



	render() {
		console.log("执行了组建的render方法");

		return (
			<div>
				<span>我是App组件</span>
				<h2>当前计数: {this.state.counter}</h2>
				<button onClick={e => this.increment()}>+1</button>
				<button>-1</button>

				<hr />
				<button onClick={e => this.changeCpnShow()}>切换</button>
				{this.state.isShow &&<Cpn />}
			</div>
		)

	}

	increment() {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	changeCpnShow() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	// 当组件挂载成功后调用
	componentDidMount() {
		console.log("执行了组件的componentDidMount方法");
	}

	// 组件发生更新
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("执行了组建的componentDidUpdate方法");
	}
}
