import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(
  ()=>{
          authService.getCurrentUser()
          .then((userData)=>{
            if(userData){
              dispatch(login({userData}))
            }
            else{
              dispatch(logout())
            }
          })
          .catch(console.log("Error in app.jsx useeffect"))
          .finally(()=>setLoading(false))
  },[])


return !loading?(<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className='w-full block'>
    <Header/>
    <main>
      TODO: 
    </main>
    <Footer/>
  </div>
  
</div>):null
  
}

export default App
