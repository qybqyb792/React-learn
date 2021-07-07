import React, { useCallback, useState, memo, useMemo } from 'react'

const HYButton = memo((props) => {
  console.log(props.title, '重新渲染')
  return <button onClick={props.increment}>HY+1</button>
})

export default function CallbackHookDemo02() {
  console.log('CallbackHookDemo02重新渲染')

  const [count, setCount] = useState(0)

  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log('increment1')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('increment2')
    setCount(count + 1)
  }, [count])

  const increment3 = useMemo(() => {
    return () => {
      console.log('increment2')
      setCount(count + 1)
    }
  }, [count])

  return (
    <div>
      <h2>CallbackHookDemo02</h2>
      <h2>计数: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton title="btn1" increment1={increment1} />
      <HYButton title="btn2" increment2={increment2} />

      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  )
}
