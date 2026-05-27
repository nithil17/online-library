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
            // New books are inserted first to satisfy the assignment redirect requirement.
            state.booksAll.unshift(action.payload);
        }
    }

});

export const {addBooks} = booksSlice.actions;

export default booksSlice.reducer;
