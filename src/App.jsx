import { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import { ThemeContext } from './components/ThemeContext'


function App() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={`App ${theme}`}>
      <Home />
    </div>
  )
}

export default App
