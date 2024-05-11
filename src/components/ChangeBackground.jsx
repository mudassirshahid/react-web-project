import { React, useState } from 'react'

function ChangeBackground() {

    const [color, setColor] = useState("#242424")
  return (
    <>
    <div className="w-full h-screen duration-200" style={{background: color}}>
        <button onClick={() => setColor(red)}></button>
    </div>
    </>
  )
}

export default ChangeBackground
