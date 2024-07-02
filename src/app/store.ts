import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../assets/feature/todoSlice";

export const store = configureStore({
    reducer: todoSlice
})