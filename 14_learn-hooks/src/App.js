import React, { createContext, useState } from 'react'

// import CounterClass from './01_体验hooks/02_counter-hook'
// import CounterHook from './01_体验hooks/02_counter-hook'
// import CounterHook2 from './01_体验hooks/03_counter-hook'
// import MultHookState from './02_useState使用/01_多个状态的使用'
// import ComplexHookState from './02_useState使用/02_复杂状态的修改'

// import ClassCounterTitleChange from './03_useEffect/01_class实现title的修改'
// import HookCounterChangeTitle from './03_useEffect/02_useEffect的hook实现title的修改'
// import EffectHookCancelDemo from './03_useEffect/03_useEffect模拟订阅和取消订阅'
// import MultiEffectHookDemo from './03_useEffect/04_多useEffect一起使用'

// import ContextHoookDemo from './04_useContext使用/01_useContext的使用'

// import Home from './05_useReducer使用/Home'
// import Profile from './05_useReducer使用/profile'

// import CallbackHookDemo01 from './06_useCallback使用/01_useCallback不能进行的性能优化'
// import CallbackHookDemo02 from './06_useCallback使用/02_useCallback进行的性能优化'

// import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
// import MemoHookDemo02 from './07_useMemo使用/02_useMemo传入子组件引用类型'

// import RefHookDemo01 from './08_useRef使用/01_useRef引用DOM'
// import RefHookDemo02 from './08_useRef使用/02_useRef引用其他数据'

// import ForwardedRefDemo from './09_useImperativeHandle/01_回顾forwardRef的用法'
// import UseImperativeHandleHookDemo from './09_useImperativeHandle/02_useImperativeHandle用法'

// import EffectCounterDemo from './10_useLayoutEffect使用/01_useEffect的count修改'
// import UseLayoutEffectCounterDemo from './10_useLayoutEffect使用/02_useLayoutEffect的count修改'

import CustomLifeHookDemo01 from './11_自定义Hook/01_认识自定义Hook'

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* 1.初体验 */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}

      {/* 2.uesState */}
      {/* <MultHookState /> */}
      {/* <ComplexHookState /> */}

      {/* 3.useEffect */}
      {/* <ClassCounterTitleChange /> */}
      {/* <HookCounterChangeTitle/> */}
      {/* {show && <EffectHookCancelDemo />}

      

      <MultiEffectHookDemo /> */}

      {/* 4.useContext */}
      {/* <UserContext.Provider value={{ name: 'zyt', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHoookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 5.useReducer */}
      {/* <Home/>
			<Profile /> */}

      {/* 6.useCallback */}
      {/* <CallbackHookDemo01 /> */}
      {/* <CallbackHookDemo02 /> */}

      {/* 7.useMemo */}
      {/* <MemoHookDemo01/> */}
      {/* <MemoHookDemo02 /> */}

      {/* 8.useRef */}
      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}

      {/* 9.useImperotvieHandle */}
      {/* <ForwardedRefDemo /> */}
      {/* <UseImperativeHandleHookDemo /> */}

      {/* 10.useLayoutEffect */}
      {/* <EffectCounterDemo /> */}
      {/* <UseLayoutEffectCounterDemo /> */}

      {/* 11.自定义Hook */}
      {show && <CustomLifeHookDemo01/>}

      <button onClick={(e) => setShow(!show)}>切换</button>
    </div>
  )
}
