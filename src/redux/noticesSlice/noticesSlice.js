import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    fetchNotices,
    fetchNoticeById,
    deleteNotice,
    // addPetOrNotice as addNotice
} from "./operations";
import { addPetOrNotice as addNotice }  from "../petsSlice/operations";

const extraOperations = [fetchNotices, fetchNoticeById, deleteNotice, addNotice];
const getOperations = (type) =>
    isAnyOf(...extraOperations.map(action => action[type]));



// operations redusers
const pandingReduser = state => {
    state.isLoading = true;
};

const rejectedReduser = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const fulfilledReduser = state => {
    state.isLoading = false;
    state.error = null; 
}

const fetchNoticesSuccessReduser = (state, {payload}) => {
    state.items = payload;
};

const addNoticesSuccessReduser = (state, {payload}) => {
    if (payload.addedNotice.category === "sell" ||
        payload.addedNotice.category === "lost" ||
        payload.addedNotice.category === "good hands"
    ) {
        state.items.push(payload.addedNotice);
    }
    return;
};

const deleteNoticesSuccessReduser = (state, {payload}) => {
    const index = state.items.findIndex(notice => notice._id === payload._id);
    state.items.splice(index, 1);   
};


const noticesSlice = createSlice({
    name: "notices",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => builder
        .addCase(fetchNotices.fulfilled, fetchNoticesSuccessReduser)
        .addCase(addNotice.fulfilled, addNoticesSuccessReduser)        
        .addCase(deleteNotice.fulfilled, deleteNoticesSuccessReduser)
        .addMatcher(getOperations('pending'),pandingReduser)
        .addMatcher(getOperations('rejected'),rejectedReduser)
        .addMatcher(getOperations('fulfilled'),fulfilledReduser)
});

// slice reduser
export const noticesReducer = noticesSlice.reducer;

