import React from 'react'

function Child({alertMsg}) {
  const data = "Rohit Raj";
  return (
    <>
      <h2 className="text-[red] text-xl">{alertMsg(data)}</h2>
    </>
  )
}

export default Child