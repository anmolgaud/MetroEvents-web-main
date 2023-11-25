import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToggleMode } from '../features/siteThemeSlice';
import { MdLightMode, MdDarkMode } from "react-icons/md";
const Navbar = () => {
    const dispatch = useDispatch();
    const {DarkMode} = useSelector((store) => store.siteTheme);
  return (
    <nav className='flex justify-between pt-8'>
            <div className=''>
            <p className='font-semibold text-3xl bg-gradient-to-r from-indigo-500 to-red-400 bg-clip-text text-transparent'>MetroEvents</p>
            </div>

            <div>
                {DarkMode ? <MdDarkMode onClick={() => dispatch(ToggleMode())} color='#E1E8F5' size={'1.8rem'} /> : <MdLightMode onClick={() => dispatch(ToggleMode())} size={'1.8rem'}/>}
            </div>
    </nav>
  )
}

export default Navbar