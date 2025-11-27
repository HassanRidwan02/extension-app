import { useState } from 'react'

import './App.css'

import Navbar from './Navbar'
import ExtensionList from './ExtensionList'
import Card from './Card'
function App() {

  const [filter, setFilter] = useState('all')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme === 'dark' ? 'dark-theme' : ''
  }

  return (
    <div className='container'>
      <div className="inner-container">
        <Navbar className='navbar' theme={theme} toggleTheme={toggleTheme} />
        <ExtensionList filter={filter} setFilter={setFilter} />
        <Card filter={filter} />
      </div>
    </div>
  )
}

export default App
