import { useState } from "react"



function App() {
   const [color,setColor]=useState("black")
 

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}} >
    <button onClick={()=>setColor('red')}>Red</button>
     <button onClick={()=>setColor('blue')}>Blue</button>
     <button onClick={()=>setColor('grey')}>Grey</button>
     <button onClick={()=>setColor('black')}>Black</button>
     <button onClick={()=>setColor('white')}>White</button>
     <button onClick={()=>setColor('yellow')}>Yellow</button>
     <button onClick={()=>setColor('green')}>Green</button>
     <button onClick={()=>setColor('orange')}>Orange</button>
     <button onClick={()=>setColor('violet')}>Violet</button>
    </div>
    
  
  )
}

export default App
