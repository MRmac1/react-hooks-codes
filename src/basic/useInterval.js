import React, { useState, useEffect, useRef } from 'react'

// useRef 和 if (!delay) return 这里使用太精妙了！
export default function UseIntervalDemo() {

  const [counter, setCounter] = useState(0)
  const [delay, setDelay] = useState(2000)

  const fn = () => {
    setCounter(counter + 1)
  }

  const fnRef = useRef(fn)
  fnRef.current = fn

  useEffect(() => {
    console.log('in effect');
    if (!delay) return;
    fnRef.current()
    const timer = setInterval(() => fnRef.current(), delay)
    return () => {
      console.log('clear');
      return clearInterval(timer)
    }
  }, [delay])

  return <>
    <span>当前 counter 值为 {counter}</span>
    <button style={{ marginLeft: '8px' }} onClick={() => setDelay(null)}>关闭 Interval</button>
    <button style={{ marginLeft: '8px' }} onClick={() => setDelay(2000)}>打开 Interval</button>
  </>

}