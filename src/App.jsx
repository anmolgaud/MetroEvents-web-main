import React from 'react'
import Home from './Pages/Home'
import { useSelector } from 'react-redux'
import Popup from './Components/Popup';
const App = () => {
  const {DarkMode, ModalOpen} = useSelector((store) => store.siteTheme);
  return (
    <main className={`${DarkMode ? 'bg-background-1': 'bg-slate-200'}`}>
      <Home/>
      {ModalOpen && <Popup />}
    </main>
  )
}

export default App