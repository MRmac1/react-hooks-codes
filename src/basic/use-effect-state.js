import React, { useState, useEffect } from 'react';

export default function UserEffectState(props) {

  const [counter, setCounter] = useState(0)

  /* useEffect 操作 dom */
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = 'useEffect'
  //   }, 2000)
  // })

  /* useEffect 操作 state */
  // useEffect(() => {
  //   console.log('in useEffect');
  //   setTimeout(() => {
  //     setCounter(counter + 1)
  //   }, 2000)
  // })

  /* useEffect 返回清除函数 */
  // useEffect(() => {
  //   console.log('in useEffect');
  //   const timerId = setTimeout(() => {
  //     setCounter(counter + 1)
  //   }, 2000)

  //   return () => {
  //     clearTimeout(timerId)
  //   }
  // })

  /* useEffect 使用 & 清除 effect 顺序 */
  useEffect(() => {
    console.log('effect:', counter);
    return () => {
      console.log('clear:', counter);
    }
  }, [counter]);

  console.log('before render', counter);

  return <>
    <h2 onClick={() => setCounter(counter + 1)}>Counter: {counter}</h2>
  </>
}
