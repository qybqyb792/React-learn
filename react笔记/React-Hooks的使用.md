# useState

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

# useEffect

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

