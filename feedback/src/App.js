import { useState } from 'react'
import Header from "./components/Header"
import Feedbackitem from "./components/Feedbackitem"

function App() {
  const [feedback, setFeedback] = useState ()
  return (
    <>
    <Header />
    <div className='container'>
      <Feedbackitem />
    </div>
    </>
  )
}

export default App