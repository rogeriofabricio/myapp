import React from 'react'
import Child from '../components/Childs';
import { useState, useEffect } from 'react';

export default function Parent() {
  const [data, setData] = useState('');

  useEffect(() => {
    setData("Ana, Islla")
  },[])

  return (
    <div>
      <Child value={data}/>
    </div>
  )
}