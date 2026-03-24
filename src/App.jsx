import { useState } from 'react'
import Welcome from './components/welcome'
import Signin from './components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Welcome /> */}
      <Signin/>
    </>
  )
}

export default App
