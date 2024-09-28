import React from 'react'
import Child from "./Child";

function Parent() {
  const getValue = (elem) => {
    console.log(elem);
  }
  return (
    <>
      <Child alertMsg={getValue} />
    </>
    
  )
}

export default Parent