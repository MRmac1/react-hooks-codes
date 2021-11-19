import React, { useRef } from 'react';

export default function UseRef(props) {
  const inputRef = useRef(null)

  const focusTextInput = () => {
    console.log('focusTextInput', inputRef);
    inputRef.current.focus()
  }

  return <>
    <h2>useRef 操作 dom</h2>
    <input type="text" ref={inputRef} />
    <button onClick={focusTextInput}>点击我让input组件获得焦点</button>
  </>
}