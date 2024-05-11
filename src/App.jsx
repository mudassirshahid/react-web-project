import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Counter from './components/Counter'
import CardSection from './components/CardSection'

function App() {
  const [color, setColor] = useState("#242424")
  const [colorUpdated, setcolorUpdated] = useState(false);
  

  const updateColor = () => {
    setColor(colorUpdated ? "#242424" : "White");
    setcolorUpdated(!colorUpdated);
  }

//  const [counter, setCounter] = useState(0)

//  const addCounter = () => {
//   setCounter(counter + 1)
//  }
//  const subCounter = () => {
//   // if(counter > 0) {
//   //   setCounter(counter - 1)
//   // }
//   setCounter(counter > 0 ? counter - 1 : 0)
//  }

  return (
    <>
    {/* <div className="text-center">Counter: {counter}</div>
    <button onClick={addCounter}>Add</button>
    <button onClick={subCounter}>Sub</button> */}
    <div className="w-full h-auto duration-200" style={{background: color}}>
    {/* <button className="my-3" onClick={() => setColor("Purple")}>Click to Purple</button> */}
    <button className="my-3" onClick={updateColor}>Set mode</button>
    <Counter />
    <CardSection />
    <Carousel />
    </div>
    </>
  )
}

export default App
