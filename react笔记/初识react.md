# React是什么

React是用于构建用户界面的JavaScript库。由FaceBook开发的，能简单，快速，高效地开发复杂和交互式的Web和移动UI。优点体现在开发效率、维护、组合扩展、生态、组件化思想等。现在，React有一个很大的支持社区。
 React的特点:

1. 声明式。配合使用JSX，以声明式编写UI, 使得代码编写容易，容易理解和维护。
2. 组件化。通过React组件来构建各种UI，组件拥有状态，当状态数据改变时，React能有效地更新并正确地渲染组件。
3. 跨平台。一次学习，随处编写。可以在Web开发中使用，也可以使用 Node 进行服务器渲染，还可以使用基于React的 React Native 开发原生移动应用。

# Hello React

因为React本身是一个JavaScript库，所以只要在HTML文件中通过script 标签引入相关的一些js文件，就可以直接用React来编写UI了。

```react
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, React!</h1>,
        document.getElementById('root')
      );
    </script>
    
  </body>
</html>

```

在浏览器控制台中打印出React的值，可以看到React是一个对象，有很多的属性。



![img](https://user-gold-cdn.xitu.io/2019/9/26/16d6ca1eb736e114?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

大多的属性的属性值是方法。React.createElement就是我们常用的用来创建React元素。



# JSX

JSX(JavaScript XML)是 JavaScript 定义的一套用于描述UI的扩展语法。使用JSX来编写UI，使得代码的可读性更好。在React开发中，经常会使用JSX来写组件。

## JSX语法

JSX语法有如下一些规则：

1. 自定义组件使用是必须首字母大写，首字母不大写会直接解析为同名html标签
2. 属性名称用camelCase来定义
3. 对于字符串值，用引号
4. 对于表达式，用大括号，可以在大括号内放置任何有效的 JavaScript 表达式。
5. 一个标签里面没有内容，可以使用 /> 来闭合标签
6. JSX中编写注释用大括号将/* */语句包起来

```react
<div>
    <div className="shopInfo"></div>;
    <div tabIndex="0"></div>;
    <img src={user.avatarUrl}></img>;
    {/* 注释写在这里 */}
    Hello, {name}!
    {/* 多行注释 
    也同样有效。 */}
</div>
```

JSX和HTML的区别有

1. key、ref 和 dangerouslySetInnerHTML属性只在JSX中存在
2. 使用到HTML的标记元素的class属性名称在JSX中是className
3. JSX中事件要使用小驼峰式写法
4. style中的css属性要使用小驼峰式写法

# React元素

React元素就是JSX表达式的值，通过React元素来渲染屏幕上的内容。ReactDOM 会负责更新 DOM 来与 React 元素保持一致。 将一个React元素渲染到HTML的节点（假设id = 'root'）上的方法是把它们传入ReactDOM.render()方法中

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
复制代码
```

ReactDOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态，从而提高性能。

# React组件

React组件使用一个名为 render() 的方法，接收输入的数据并返回需要展示的内容，展示的内容是由React元素构成的。 最简单的React组件

1. 创建一个继承于React.Component的class
2. 创建render方法并实现

```
class Welcome extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
复制代码
```

自定义组件名称必须以大写字母开头。
 在React应用中，UI是由一系列React组件构建起来的。这些组件将整个UI分成小的、独立的甚至是可重用的部分。一个组件的变动不会影响到另一个组件。

## 组件数据管理

React元素会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 “props”。
 组件有两个很重要的属性props 和 state。
 组件使用外部数据 this.props
 组件维护内部数据 this.state 和 this.setState()
 组件的props属性是只读的，它们总是在整个应用中从父组件传递到子组件。子组件永远不能将 prop 送回父组件。这有助于维护单向数据流。即组件不能修改自身的props。
 组件的state属性是私有的，并且完全受控于当前组件。随用户操作、网络响应或者其他变化而需要动态更新UI的可以通过更新其state来实现。

1. 修改this.state需要通过this.setState()方法，不要直接修改this.state
2. state的更新可能是异步的
3. state的更新会被合并

当组件的状态发生变化时，组件会再次调用render()方法重新渲染。

## React组件生命周期

> 分三个阶段：挂载阶段、更新阶段和卸载阶段，始终使用props 参数来调用父类的构造函数

挂载阶段：组件即将开始被添加到DOM阶段。
 更新阶段：一旦组件被添加到DOM，它只有在 props 或state发生变化时才可能更新和重新渲染。 卸载阶段：组件被销毁并从 DOM 中删除。这是组件生命周期的最后阶段。
 一些重要的生命周期方法：

1. componentWillMount() – 在渲染之前执行，在客户端和服务器端都会执行。
2. componentDidMount() – 仅在第一次渲染后在客户端执行。
3. componentWillReceiveProps() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
4. shouldComponentUpdate() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。
5. componentWillUpdate() – 在 DOM 中进行渲染之前调用。
6. componentDidUpdate() – 在渲染发生后立即调用。
7. componentWillUnmount() – 从 DOM 卸载组件后调用。用于清理内存空间。

关于componentWill系列方法，在React16.9中提到

![img](https://user-gold-cdn.xitu.io/2019/9/25/16d67b470e6565fa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## React组件事件处理

React元素同html标签元素一样，可以响应事件，其语法要求是

1. React事件的命名采用小驼峰
2. 传入一个函数作为事件处理函数
3. 需要显示调用preventDefault方法来阻止默认行为
4. 在 JavaScript 中，类的方法默认不会绑定 this, 所以如果直接在React元素的响应事件方法中访问this，得到的值是undefined，因此，需要通过bind绑定。 在构造函数中绑定

```
class Foo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
复制代码
```

直接在render函数中绑定

```
class Foo extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }
}
复制代码
```

如果不想绑定bind，可以用箭头函数。

```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
复制代码
```

在 render 方法中使用 Function.prototype.bind 和 箭头函数 都会在每次组件渲染时创建一个新的函数, 这会影响性能。
 \5. 事件处理函数传递参数

```
<button onClick={() => this.handleClick(id)} />
 // 等价
<button onClick={this.handleClick.bind(this, id)} />

复制代码
```

向事件处理函数传递参数时，如果事件处理函数是箭头函数，事件对象必须显式的进行传递，如果是bind方式，事件对象可以被隐式传递。

## 组件更多语法

基本上就是将js的语法和JSX组合起来灵活的构建组件，比如条件语句、循环语句等。组件的className也可以是变量，根据不同的值来展示对应的样式。

```
class Demo extends React.Component {
  const numbers = [1, 2, 3, 4, 5];
  const isShow = props.isShow
  render() {
      return <h1>Hello</h1>;
    
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      );
      
      const showItem = isShow ? <div> showItem </div> : null
      return (
        <ul>{listItems}</ul>
        {showItem}
      );
  }
}
复制代码
```

因为JSX允许在大括号中嵌入任何表达式，所以上面render方法中的变量对应的表达式可以直接放到return中，替换掉变量

以下内容研究不深，等以后在实际开发中涉及到相关知识点的时候再回来研究🤦‍♀️

# React调试插件

React Developer Tools 插件: [chrome.google.com/webstore/de…](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

# 为什么使用虚拟DOM

