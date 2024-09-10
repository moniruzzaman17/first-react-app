import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Joke from './pages/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Joke />
  )
}

export default App
