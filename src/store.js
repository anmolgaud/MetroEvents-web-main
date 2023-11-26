import {configureStore} from '@reduxjs/toolkit';
import siteThemeReducer from './features/siteThemeSlice';
import createEventReducer from './features/createEventSlice';
export default configureStore({
    reducer : {
        siteTheme : siteThemeReducer,
        createEvent : createEventReducer,
    }
})