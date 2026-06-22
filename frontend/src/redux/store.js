import {configureStore} from '@reduxjs/toolkit' ;
import authSlice from './slices/authSlice';
import videoSlice from './slices/videoSlice';
import searchSlice from './slices/searchSlice';
import categorySlice from './slices/categorySlice';


const appStore = configureStore({

    reducer : {
        auth : authSlice,
        video : videoSlice,
        search : searchSlice,
        category : categorySlice
    }

})


export default appStore ;