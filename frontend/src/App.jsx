import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">CDAC Connect Portal</h1>
      <p className="text-gray-600">React + Vite + Tailwind CSS Setup Complete</p>
    </div>
    </>
  )
}

export default App
