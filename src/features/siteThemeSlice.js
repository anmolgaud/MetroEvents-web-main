import { createSlice } from "@reduxjs/toolkit";
import eventList from "../events";

const initialState = {
  DarkMode: true,
  ModalOpen: false,
  Events: eventList,
};
export const siteThemeSlice = createSlice({
  name: "siteTheme",
  initialState,
  reducers: {
    ToggleMode: (state) => {
      state.DarkMode = !state.DarkMode;
    },
    ToggleModal: (state) => {
      state.ModalOpen = !state.ModalOpen;
    },
    AddEvent: (state, action) => {
      const newEvent = action.payload;
      state.Events.push(newEvent);
    },
  },
});

export const { ToggleMode, ToggleModal, AddEvent } = siteThemeSlice.actions;
export default siteThemeSlice.reducer;
