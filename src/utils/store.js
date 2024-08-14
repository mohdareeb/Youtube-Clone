import {configureStore} from '@reduxjs/toolkit'
import appSlice from "./appSlice"
import chatSlice from './chatSlice.js';
import keywordSlice from './keywordSlice.js';

const store=configureStore(
    {
        reducer : {
            app:appSlice,
            chat:chatSlice,
            keyword:keywordSlice
        },
    }
)

export default store;