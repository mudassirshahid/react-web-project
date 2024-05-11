import {React, useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Mudassir")
    const [nameUpdated, setNameUpdated] = useState(false);
  
  
    const addValue = () => {
      setCount(count + 1)
      // setCount(count + 1)
      // setCount(count + 1)
      // setCount(count + 1)
      // In the above example if we write multiple time then? Then state update and add only one when clicked not add 4 
  
      // setCount is callback function and BTS the syntax is setCount(() => {}) so if we give parameter like prevCounter then add in return prevCount + 1 then this will add 4 when clicked as above example
      // setCount((prevCount) => prevCount + 1)
      // setCount((prevCount) => prevCount + 1)
      // setCount((prevCount) => prevCount + 1)
      // setCount((prevCount) => prevCount + 1) 
  
      // Above example is basically Interview question
    }
  
    const removeValue = () => {
      if(count > 0) {
        setCount(count - 1)
      }
    }

    const updateName = () => {
        setName(nameUpdated ? "Mudassir" : "Mudassir Shahid");
        setNameUpdated(!nameUpdated);
      }

  return (
    <div>
       {/* Counter Start  */}
       <h1 className="text-5xl font-bold underline text-cyan-400 mb-5">Counter</h1>
      <h3>Counter Value : {count}</h3>
      <button onClick={addValue}>Add Value {count}</button>
       <br />
       <br />
      <button onClick={removeValue}>remove Value {count}</button> 
       <br />
       <br />
      <button onClick={updateName}>{name}</button>

      {/* Counter End  */}
    </div>
  )
}

export default Counter
