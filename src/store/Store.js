import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../slice/todoSlice/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})