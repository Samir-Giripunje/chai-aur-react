
import { useState } from 'react'
import './App.css'

function App() {
  let num =0
 const [counter,setcounter]=useState(num)

 const addValue =()=>{
 setcounter((prevCounter)=> prevCounter+1)
//  setcounter((prevCounter)=> prevCounter+1) --> in this way uou can increse it by multiple

   

  //this wont be increasing it by 4 instead it will be called once only
  // setcounter(counter+1)
  // setcounter(counter+1)
  // setcounter(counter+1)
  // setcounter(counter+1)



    /*
  Since React batches state updates for performance reasons, those three subsequent calls to setcounter are based on the initial value of counter (before the first setcounter is executed). As a result, you effectively end up with just one increment.

  */

 }
 const reduceValue =()=>{
  if(counter!==0){setcounter(counter-1)}
  
 }

  return (
    <>
    <h3>Current value of counter is {counter}</h3>
     <button onClick={addValue} >Increment</button>
     <button onClick={reduceValue}>Decremet</button>
    </>
  )
}

export default App
