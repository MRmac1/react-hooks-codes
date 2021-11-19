import React, { useEffect, useState } from 'react'
import UseStateRender from './basic/use-state-render'
import StateModify from './basic/use-state-modify'
import UseEffectState from './basic/use-effect-state'
import UseEffectStateProps from './basic/use-effect-state-props'
import UserRef from './basic/use-ref'
import UseMemoCallback from './basic/use-memo-callback'
import UseInterval from './basic/useInterval'

import 'antd/dist/antd.css';

import './App.less';


function App() {
  const [base, setBase] = useState({})
  useEffect(() => {
    setTimeout(() => {
      setBase({
        name: 'jack',
        age: 12
      })
    }, 200)
  }, [])

  return (
    <div className="App">
      <article className="App-content">
        <section className="App-hooks">
          {/* <StateModify /> */}
          {/* <UseStateRender /> */}
          {/* <UseEffectState /> */}
          {/* <UseEffectStateProps base={base} /> */}
          {/* <UserRef /> */}
          {/* <UseMemoCallback /> */}
          <UseInterval />
        </section>
      </article>
    </div>
  );
}

export default App;
