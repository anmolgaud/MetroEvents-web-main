import React from 'react'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
const App = () => {
  const {DarkMode} = useSelector((store) => store.siteTheme);
  return (
    <main className={`${DarkMode ? 'bg-background-1': 'bg-slate-200'}`}>
      <Home/>
    </main>
  )
}

export default App