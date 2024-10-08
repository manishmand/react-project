import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //  let counter = 15;

   const addValue =() => {
      // console.log("value addeded", counter);
      counter = counter+1;
      setCounter(counter);
      // console.log("value is added",{counter})
   } 
   const removevalue = () => {
    counter =counter-1;
    setCounter(counter);
    // console.log("value is remove",{counter})
   }
  
  return (
    <>

      <h1>chai aur react</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick = {removevalue}>remove value {counter}</button>

     
    </>
  )
}

export default App      
