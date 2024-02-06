import { useState } from "react"

const FirstComponent = ({data, fn}) => {
    
  return (
    <div>
        <button onClick={ () => {fn(10)} }>Set Value 10</button>
      <span> Clicked - {data}</span>
    </div>
  )
}

export default FirstComponent
