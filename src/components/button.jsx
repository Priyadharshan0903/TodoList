import React from 'react'

function button(props) {
  return (
      <button className="rounded m-1  w-full  text-white text-lg bg-sky-700">{props.name}</button>
  )
}

export default button;