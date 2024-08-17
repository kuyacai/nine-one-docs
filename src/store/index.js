
import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import themeConfigSlice from './themeConfigSlice';
import customizationReducer from './customizationReducer';
import accountReducer from './accountReducer';
import siteInfoReducer from './siteInfoReducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const rootReducer = combineReducers({
    //themeConfig: themeConfigSlice,
    customization: customizationReducer,
    account: accountReducer,
    siteInfo: siteInfoReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

const persister = 'Free';

export { store, persister };