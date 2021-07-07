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

import ContextHoookDemo from './04_useContext使用/01_useContext的使用'

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

      <button onClick={(e) => setShow(!show)}>切换</button>

      <MultiEffectHookDemo /> */}

      {/* 4.useContext */}
      <UserContext.Provider value={{ name: 'zyt', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHoookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
