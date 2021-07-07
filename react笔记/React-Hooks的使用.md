# useState的使用

> useState是react自带的一个hook函数，它的作用是用来声明状态变量。

> useState这个函数接收的参数是状态的初始值(Initialstate)，它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数。

useState是react自带的一个hook函数，它的作用是用来声明状态变量。

useState这个函数接收的参数是状态的初始值(Initialstate)，它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数。

多状态声明的注意事项:

React是根据useState出现的顺序来确定的

> useState不能在if...else...这样的条件语句中进行调用，必须要按照相同的顺序进行渲染。如果你还是不理解，你可以记住这样一句话就可以了：

> 就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。

```react
function Table(props) {
  // ✅ createRows() is only called once
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
function createRows(props) {
  return props
}
```

# useEffect的使用

> 利用useEffect函数代替一些生命周期；

> useEffect类似于setState(state,cb)中的cb，总是在整个更新周期的最后才执行；

> useEffect需要定义第二个参数`dependences`,dependences 这个参数定义了 useEffect的依赖；

**useEffect注意点**

1. React首次渲染和之后的每次渲染都会调用一遍useEffect函数。
   - 而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMount)和更新导致的重新渲染(componentDidUpdate)。
2. useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的。
   - 而componentDidMount和componentDidUpdate中的代码都是同步执行的
3. useEffect的第二个参数:dependences
   - dependences这个参数定义了useEffect的依赖，在新的渲染中，只要所有依赖项的引用都不发生变化，useEffect就不会被执行，且当依赖项为[]时，useEffect仅在初始化执行一次，后续的Rerender永远也不会被执行。
4. useEffect 实现 componentWillUnmount生命周期函数
   - 当第二个参数传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数
5. 开发者通过 useEffect 的第二个参数告诉 React 用到了哪些外部变量。

##   需要清除Effect  

-  在class组件的编写过程中，某些副作用的代码，我们需要在componentWillUnmount中进行清除：

  - 比如我们之前的事件总线或Redux中手动调用subscribe；  
  -  都需要在componentWillUnmount有对应的取消订阅；  
  -   Effect Hook通过什么方式来模拟componentWillUnmount呢？  

-  useEffect传入的回调函数A本身可以有一个返回值，这个返回值是另外一个回调函数B：  

  ```jsx
  type EffectCallback = () => (void | (() => void | undefined));  
  ```

  

-  为什么要在 effect 中返回一个函数？  

  -   这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数；  
  -  如此可以将添加和移除订阅的逻辑放在一起；  
  -  它们都属于 effect 的一部分；  

-  React 何时清除 effect？  

  -  React 会在组件更新和卸载的时候执行清除操作；  
  -  正如之前学到的，effect 在每次渲染的时候都会执行；  

##   使用多个Effect  

- 使用Hook的其中一个目的就是解决class中生命周期经常将很多的逻辑放在一起的问题：  
  - 比如网络请求、事件监听、手动修改DOM，这些往往都会放在componentDidMount中；  
- 使用Effect Hook，我们可以将它们分离到不同的useEffect中：
  - 代码不再给出  
- Hook 允许我们按照代码的用途分离它们， 而不是像生命周期函数那样：
  - React 将按照 effect 声明的顺序依次调用组件中的每一个 effect；  

## Effect性能优化

- 默认情况下，useEffect的回调函数会在每次渲染时都重新执行，但是这会导致两个问题：  
  - 某些代码我们只是希望执行一次即可，类似于componentDidMount和componentWillUnmount中完成的事情；（比如网  络请求、订阅和取消订阅）；  
  - 另外，多次执行也会导致一定的性能问题；  
- 我们如何决定useEffect在什么时候应该执行和什么时候不应该执行呢？ 
  - useEffect实际上有两个参数：  
  - 参数一：执行的回调函数；  
  - 参数二：该useEffect在哪些state发生变化时，才重新执行；（受谁的影响）  
- 案例练习：  
  - 受count影响的Effect；  
- 但是，如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组 []：  
  - 那么这里的两个回调函数分别对应的就是componentDidMount和componentWillUnmount生命周期函数了；

## 不同值的参数

- 不传参数
- 空数组
- 一个值的数组
- 多个值的数组

### 不传参数

```jsx
useEffect(() => {
    console.log('useEffect with no dependency')
})
```

如上所示，默认的行为，会每次 render 后都执行

### 空数组

```jsx
useEffect(() => {
    console.log('useEffect with empty dependency')
}, [])
```

传入第二个参数，每次 render 后比较数组的值没变化，不会在执行，等同于类组件中的 componentDidMount

### 一个值的数组

```jsx
useEffect(() => {
    console.log('useEffect widh specify dependency')
}, [id])
```

传入第二个参数，只有一个值，比较该值有变化就执行

### 多个值的数组

```jsx
useEffect(() => {
    console.log('useEffect widh specify dependency')
}, [id, name])
```

传入第二个参数，有2个值的数组，会比较每一个值，有一个不相等就执行

# useContext的使用  

- 在之前的开发中，我们要在组件中使用共享的Context有两种方式：  
  - 类组件可以通过 类名.contextType = MyContext方式，在类中获取context； 
  - 多个Context或者在函数式组件中通过 MyContext.Consumer 方式共享context；  
- 但是多个Context共享时的方式会存在大量的嵌套：  
  - Context Hook允许我们通过Hook来直接获取某个Context的值； 
- 注意事项：  
  - 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重新渲染，并使用最新传递给 MyContext provider  的 context value 值。  

#   useReducer  
