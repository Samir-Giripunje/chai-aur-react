import { useState,useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [isNumberAllowed,setisNumberAllowed]= useState(false)
  const [isSymbolAllowed,setisSymbolAllowed]= useState(false)
  const [lenPass,setLenPass]=useState(6)



const numAdded=()=>{
  
  setisNumberAllowed((prev)=>!prev)
  
 

  passWordSetting()
}

const symbolsAdded=()=>{
  
  setisSymbolAllowed((prev)=>!prev)
  
 
  passWordSetting()
}

const passWordSetting=()=>{
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(isNumberAllowed) str+="1234567890"
  if(isSymbolAllowed)str+="~!@#$%^&*"
  let newPass=""
  for (let index = 0; index < lenPass; index++) {
    newPass+=str[Math.floor(Math.random()*str.length)]
   
  }
  console.log(str);
  console.log(str.length);
  setPassword(newPass)
}

useEffect(()=>{passWordSetting()},[isNumberAllowed,isSymbolAllowed,lenPass])
  return (
    <>
       <div>
      
        <input type="text" name="password" id="pass" value={password} />
        <button>Copy</button>
        <br/>
        <label htmlFor="">Length {lenPass}</label>
        <input type="range" name="range" id="range"   min={6} max={100} onChange={(e)=>(setLenPass(e.target.value))} />
        <label htmlFor="">Number</label>
        <input type="checkbox"  onClick={numAdded}/>
        <label htmlFor="">Symbols</label>
        <input type="checkbox" onClick={symbolsAdded} />
     
       </div>
    </>
  )
}

export default App
