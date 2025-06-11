import React from 'react'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-20">
        <h1 className="text-4xl font-bold text-center pt-20">
          QBitWorks - Testing with Navbar
        </h1>
        <p className="text-center mt-4 text-gray-600">
          Navbar should be visible above!
        </p>
      </div>
    </div>
  )
}

export default App