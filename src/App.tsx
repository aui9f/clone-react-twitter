import { RouterProvider } from "react-router-dom"
import router from "@/Router"
import { useEffect, useState } from "react"
import GlobalStyles from "./assets/styled/GlobalStyles"
import { auth, onAuthStateChanged } from "./fBase"
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async() => {
    await onAuthStateChanged(auth, user=>{
      if(user){
        console.log('로그인한상태');
      }else{
        console.log('라우터이동')
      }
      setIsLoading(false)
    })
    
  }
    
  useEffect(()=>{
    init();
  }, [])
  return (
    <>
    <GlobalStyles/>
    {isLoading ? <></> : <RouterProvider router={router}/>}
    </>
  )
}

export default App
