import { useState } from 'react'
import Welcome from './components/Welcome'
import Signin from './components/Signin'
import Create from './components/Create'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      {/* <Signin /> */}
      {/* <Create/> */}
    </>
  )
}

export default App
