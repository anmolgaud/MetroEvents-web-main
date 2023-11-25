import { createSlice } from "@reduxjs/toolkit";
const initialState =  {
    DarkMode : true,
}
export const siteThemeSlice = createSlice({
    name : 'siteTheme',
    initialState,
    reducers : {
        ToggleMode : (state) => {
            state.DarkMode = !state.DarkMode;
        }
    }
})


export const { ToggleMode } = siteThemeSlice.actions;
export default siteThemeSlice.reducer;