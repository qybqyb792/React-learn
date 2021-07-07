import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      // console.log('useImperativeHandle中的回调函数返回的对象的focus')
			inputRef.current.focus()
    },
  }), [inputRef])

  return <input ref={inputRef} type="text" />
})

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef()

  return (
    <div>
      <HYInput ref={inputRef}></HYInput>
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
