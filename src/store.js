import {configureStore} from '@reduxjs/toolkit';
import siteThemeReducer from './features/siteThemeSlice';
export default configureStore({
    reducer : {
        siteTheme : siteThemeReducer,
    }
})