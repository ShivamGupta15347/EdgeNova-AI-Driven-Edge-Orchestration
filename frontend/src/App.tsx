import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import CommandPrompt from './components/CommandPrompt'

function App() {
  const [showCommandPrompt, setShowCommandPrompt] = useState(false)

  return (
    <div className="app">
      <Sidebar onOpenCommandPrompt={() => setShowCommandPrompt(true)} />
      <main className="main-content">
        <Dashboard />
      </main>
      {showCommandPrompt && (
        <CommandPrompt onClose={() => setShowCommandPrompt(false)} />
      )}
    </div>
  )
}

export default App
