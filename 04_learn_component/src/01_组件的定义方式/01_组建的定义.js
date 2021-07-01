import React from "react";

// 类组件
// export default class App extends Component {

// 	constructor() {
// 		super();

// 		this.state = {
// 			message: "你好啊, React"
// 		}
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<span>我是App组件</span>
// 				<h2>{this.state.message}</h2>

// 			</div>
// 		)
// 	}
// }

// 函数式组件
/**
 * 
 * 函数时组建的特点
 * 	1.没有this对象
 * 	2.没有内部的状态(state)
 * 
 */
export default function App() {
	return (
		<div>
			<span>我是函数式组件: App组件</span>
			<h2>你好啊, React</h2>
		</div>
	)
}
