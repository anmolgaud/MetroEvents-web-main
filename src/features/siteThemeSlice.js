import { createSlice } from "@reduxjs/toolkit";
const initialState =  {
    DarkMode : true,
    ModalOpen : false,
}
export const siteThemeSlice = createSlice({
    name : 'siteTheme',
    initialState,
    reducers : {
        ToggleMode : (state) => {
            state.DarkMode = !state.DarkMode;
        },
        ToggleModal : (state) => {
            state.ModalOpen = !state.ModalOpen;
        },
    }
})


export const { ToggleMode, ToggleModal } = siteThemeSlice.actions;
export default siteThemeSlice.reducer;