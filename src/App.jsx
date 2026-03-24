import { useState } from 'react'
import Welcome from './components/welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
    </>
  )
}

export default App
