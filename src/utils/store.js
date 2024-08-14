import {configureStore} from '@reduxjs/toolkit'
import appSlice from "./appSlice"
import chatSlice from './chatSlice.js';

const store=configureStore(
    {
        reducer : {
            app:appSlice,
            chat:chatSlice,
        },
    }
)

export default store;