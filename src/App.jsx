import { useState } from 'react'
import Message from './components/Message'
import MermaidChart from './components/MermaidChart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Message/>
      <br/>
      From app component
      <br/>
      <MermaidChart/>
    </>
  )
}

export default App