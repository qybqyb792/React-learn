# 创建组件的方式

## 1.类组件

```react
import React, { Component } from "react";
// 类组件
export default class App extends Component {
	render() {
		return (
			<div>
				我是App组件
			</div>
		)
	}
}
```

## 2.函数式组件

```react
import React, { Component } from "react";
// 函数式组件
export default function App() {
	return (
		<div>
			<span>我是函数式组件: App组件</span>
			<h2>你好啊, React</h2>
		</div>
	)
}
```

以上俩种为最常见的组件定义方式,别的方式暂时不写了

# render函数的返回值

- 当 render被调用时,它会检查 this props和this. state的变化并返回以下类型之一
- **React元素**
  - 口通常通过JSX创建。
  - 例如,<dⅳ/>会被 React渲染为DOM节点,< My Component/>会被 React渲染为自定义组件;
  - 无论是<di/>还是< MyComponent/>均为 React元素。
- **数组或 fragments**:使得 render方法可以返回多个元素。
- **Portals**:可以渲染子节点到不同的DOM子树中。
- **字符串或数值类型**:它们在DOM中会被渲染为文本节点
- **布尔类型或null**:什么都不渲染。

# React的生命周期

## 1.认识生命周期

- 很多的事物都有从创建到销毁的整个过程，这个过程称之为是生命周期；
- React组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能；
- 生命周期和生命周期函数的关系：
- 生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；
  - 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程；
  - 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程；
  - 比如卸载过程（Unmount），组件从DOM树中被移除的过程；

- React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：
  - 比如实现componentDidMount函数：组件已经挂载到DOM上时，就会回调；
  - 比如实现componentDidUpdate函数：组件已经发生了更新时，就会回调；
  - 比如实现componentWillUnmount函数：组件即将被移除时，就会回调；
  - 我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能；

>我们谈React生命周期时，主要谈的类的生命周期，因为函数式组件是没有生命周期函数的；（后面我们可以通过hooks来模拟一些生命周期的回调）

## 2.生命周期解析

最基础、最常用的生命周期函数：

![image-20210701153214057](https://blog.bsat1314.cn//file/img/image-20210701153214057.png)

## 3.常用生命周期函数

### Constructor

- 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
- constructor中通常只做两件事情：
  - 通过给 this.state 赋值对象来初始化内部的state；
  - 为事件绑定实例（this）；

### componentDidMount

- componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。
- componentDidMount中通常进行哪里操作呢？
  - 依赖于DOM的操作可以在这里进行；
  - 在此处发送网络请求就最好的地方；（官方建议）
  - 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；

### componentDidUpdate

- componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法。
  - 当组件更新后，可以在此处对 DOM 进行操作；
  - 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。

### componentWillUnmount

- componentWillUnmount() 会在组件卸载及销毁之前直接调用。
  - 在此方法中执行必要的清理操作；
  - 例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等；

## 4.不常用生命周期函数

- 除了上面介绍的生命周期函数之外，还有一些不常用的生命周期函数:

  - getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state；

  - getSnapshotBeforeUpdate：在React更新DOM之前回

    调的一个函数，可以获取DOM更新前的一些信息（比如

    说滚动位置）；

  - shouldComponentUpdate：该生命周期函数很常用，但是我们等待讲性能优化时再来详细讲解;

- 另外，React中还提供了一些过期的生命周期函数，这些函数已经不推荐使用。

  可以参考官网：[React官网生命周期](https://zh-hans.reactjs.org/docs/react-component.html)

# 组件之间的通信

## 父子组件的通信

### 父传子

#### 类组件

```react
import React, { Component } from 'react'

class ChildCpn extends Component {


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

```

#### 函数式组件

```react
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

```

#### 函数组件props属性验证

需要引入prop-types

```javascript
ChildCpn.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	height: PropTypes.number,
	names: PropTypes.array
}
```

#### 函数组件props设置默认值

```javascript
ChildCpn.defaultProps = {
	name: 'zytqyb',
	age: 30,
	height: 1.90,
	names: ["aaa", "bbb"]
}
```

#### 类组件props属性验证

```react
class childCpn2 extends Component {

	static propTypes = {
		
	}

}
```

#### 类组件props设置默认值

```react
class childCpn2 extends Component {

	static defaultProps = {
		
	}

}
```

### 子传父

```react
import React, { Component } from 'react'

class CounterButton extends Component {
	render() {
		const { onClick } = this.props
		return (
			<button onClick={onClick}>+1</button>
		)
	}
}

export default class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}
	}

	render() {
		return (
			<div>
				<h2>当前计数: {this.state.counter}</h2>
				<button onClick={e => this.increment()}>+</button>
				<CounterButton onClick={this.increment} />
			</div>
		)
	}

	increment = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}
}

```





