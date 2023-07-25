import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FormStage: 1,
    OptionForm: {},
    DataForm: {},
    MoreInfoForm: {},
    isLoading: false,
    error: null    
};

const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        formStage: (state, action) => { state.FormStage = action.payload },
        optionForm: (state, action) => { state.OptionForm = action.payload },
        dataForm: (state, action) => { state.DataForm = action.payload },
        moreInfoForm: (state, action) => { state.MoreInfoForm = action.payload },
    }
});

export const { formStage, optionForm, dataForm, moreInfoForm } = petSlice.actions
export const petReducer = petSlice.reducer;