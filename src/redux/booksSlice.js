import { createSlice } from "@reduxjs/toolkit";
import {  booksData } from "../data/books";

const initialState = {
    booksAll: booksData
};

const booksSlice = createSlice({
    name: "booksAll",
    initialState,
    reducers:{
        addBooks:(state, action)=> {
            state.booksAll.unshift(action.payload);
        }
    }

});

export const {addBooks} = booksSlice.actions;

export default booksSlice.reducer;
