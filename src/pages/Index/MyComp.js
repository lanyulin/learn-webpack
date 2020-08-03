import React, { useState, useEffect, useCallback, useRef } from 'react';
import hoc from '../hoc';

const MyComp = (props) => {

  let [num, setNum] = useState(0)
  let [flag, setFlag] = useState({ x: 1 })

  const count = useRef(0);

  useEffect(() => {
    setNum(num + 1)
    console.log('num')
  }, [flag])

  React.Children.map(props.Children, child => {
    return React.cloneElement(child, {
      name: 'lanmao'
    })
  })

  const a = function handleClick() {
    setFlag({ x: 1 })
    count.current++
  }

  return <>
    <div>{num} </div>
    <button onClick={a}>点击我</button>
    <p>flag is : {flag.x + ''}</p>
    <br />
    <p>上海市{count.current}</p>
    <br />
    <br />

  </>;
}

export default hoc(MyComp);