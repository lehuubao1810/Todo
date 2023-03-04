import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeProvider from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DataProvider>
  </AuthProvider>
)
