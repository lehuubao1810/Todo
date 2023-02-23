import { useContext } from 'react'
import './App.css'
import Nav from './components/Nav'
import CardTask from './components/CardTask'
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
