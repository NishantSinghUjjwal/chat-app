import { useState } from 'react'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup/>
    </div>
  )
}

export default App
