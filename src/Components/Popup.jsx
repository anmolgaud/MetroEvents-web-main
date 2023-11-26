import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToggleModal } from '../features/siteThemeSlice';
import CreateEventModal from './CreateEventModal';
const Popup = () => {
    const dispatch = useDispatch();
    const {ModalOpen} = useSelector((store) => store.siteTheme)
    return ModalOpen ? (
      <div className="absolute z-10 top-0 left-0 w-full h-full backdrop-blur-sm bg-gradient-to-b from-white/50 to-white/30">
        <div className="w-full h-full grid place-content-center items-center">
          <div className=" flex flex-col justify-center items-center">
            <CreateEventModal />
            <button
              onClick={() => dispatch(ToggleModal())}
              className="px-4 py-2 rounded-md bg-red-500 focus:ring-1 focus:ring-gray-100 text-gray-100 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null;
}

export default Popup