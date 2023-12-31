import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToggleModal } from "../features/siteThemeSlice";
import CreateEventModal from "./CreateEventModal";

import { IoMdClose } from "react-icons/io";

const Popup = () => {
  const dispatch = useDispatch();
  const { ModalOpen } = useSelector((store) => store.siteTheme);
  return ModalOpen ? (
    <div className="fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm bg-gradient-to-b from-white/50 to-white/30">
      <div className="w-full h-full grid place-content-center items-center">
        <div className="relative flex flex-col justify-center items-center">
          <CreateEventModal />
          <div className="absolute top-0 right-0">
            <button
              onClick={() => dispatch(ToggleModal())}
              className="px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 text-gray-100 font-semibold"
            >
              <IoMdClose className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
