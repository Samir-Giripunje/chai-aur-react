import React, { useEffect, useState } from 'react'

const Github = () => {

    const [show,setShow]=useState(1)
  useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(
       data=>
       setShow(data.followers)
    )
  },[])
  return (
    <div>Github Followers: {show}</div>
  )
}

export default Github