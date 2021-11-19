
import React, { useState } from 'react';
import './use-state-render.less'

export default function UserStateRender(props) {
  const [counter, setCounter] = useState(0)

  console.log('UserStateRender render:', counter);

  return <>
    <h2>userState 重渲染</h2>
    <div className="basic-counter">
      <span>Counter Value: { counter }</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  </>
}