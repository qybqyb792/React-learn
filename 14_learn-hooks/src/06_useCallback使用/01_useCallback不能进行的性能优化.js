import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0)

  const increment1 = () => {
    console.log('increment1')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('increment2')
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>CallbackHookDemo01</h2>
			<h2>计数: { count }</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}
