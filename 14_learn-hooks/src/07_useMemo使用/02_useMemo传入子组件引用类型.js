import React, { useState, memo, useMemo } from 'react'

const HYinfo = memo((props) => {
  console.log('HYinfo重新渲染')
  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}{' '}
    </h2>
  )
})

export default function MemoHookDemo02() {
  console.log('MemoHookDemo02重新渲染')
  const [show, setSHow] = useState(true)
  // const info = { name: 'zyt', age: 18 }

  const info = useMemo(() => {
    return { name: 'zyt', age: 18 }
  }, [])

  return (
    <div>
      <HYinfo info={info} />
      <button onClick={(e) => setSHow(!show)}>show切换</button>
    </div>
  )
}
