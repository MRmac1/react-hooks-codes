import React, { useMemo, useState, useCallback, useEffect, useDebugValue } from 'react';

export default function UseMemoCallback() {
  const [target, setTarget] = useState(0);
  const [other, setOther] = useState(0)

  // const [sum, setSum] = useState(0)
  // useEffect(() => {
  //   console.log('重新计算一次');
  //   let _sum = 0;
  //   for (let i = 1; i <= target; i++) {
  //     _sum += i;
  //   }
  //   setSum(_sum)
  // }, [target]);

  const sum = useMemo(() => {
    console.log('重新计算一次');
    let _sum = 0;
    for (let i = 1; i <= target; i++) {
      _sum += i;
    }
    return _sum;
  }, [target]);

  const inputChange = useCallback((e) => {
    console.log(e.target.value);
  }, []);

  useDebugValue(target ? 'hasTarget' : 'nopTarget')


  return (
    <>
      <input type="text" onChange={inputChange} />
      <div style={{ width: '80px', margin: '100px auto', fontSize: '40px' }}>{target} {sum}</div>
      <button onClick={() => setTarget(target + 1)}>递增</button>
      <button onClick={() => setTarget(target - 1)}>递减</button>
      <div style={{ width: '80px', margin: '100px auto', fontSize: '20px' }}>干扰项 {other}</div>
      <button onClick={() => setOther(other + 1)}>递增</button>
      <button onClick={() => setOther(other - 1)}>递减</button>
    </>
  )
}