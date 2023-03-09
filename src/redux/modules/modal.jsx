import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const modalSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        modalOpen: (state, action) => {
            
        },
        modalClose: (state, action) => {

        },
    },
});

export default modalSlice.reducer;
export const { modalOpen, modalClose } = modalSlice.actions