import React, { useState, useEffect } from 'react';
import './use-effect-state-props.less'

export default function UseEffectStateProps(props) {
  const { base } = props;
  const [list, setList] = useState([])

  const fetchList = (base) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2])
      }, 1000)
    })
  }

  useEffect(() => {
    console.log('useEffect base', base);
    // 拿到 base 去异步请求
    fetchList().then(list => {
      console.log('useEffect fetchList', list);
      setList(list)
    })
  }, [base])


  console.log('before render', list);

  return <>
    <h4>baseName: {base.name}, baseAge: {base.age} </h4>
    <span>列表请求数据为：{JSON.stringify(list)}</span>
  </>
}