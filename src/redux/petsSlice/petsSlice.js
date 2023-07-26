import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FormStage: 1,
    OptionForm: {
        category: ""
    },
    DetailsForm: {
        name: "",
        birthday: "",
        breed: "",
        title: "",
        type: ""
    },
    MoreInfoForm: {
        sex: "",
        imgUrl: "",
        text: "",
        location: "",
        price: ""
    },
    isLoading: false,
    error: null    
};

const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        formStage: (state, action) => { state.FormStage = action.payload },
        optionForm: (state, action) => { state.OptionForm = action.payload },
        detailsForm: (state, action) => { state.DetailsForm = action.payload },
        moreInfoForm: (state, action) => { state.MoreInfoForm = action.payload },
    }
});

export const { formStage, optionForm, detailsForm, moreInfoForm } = petSlice.actions
export const petReducer = petSlice.reducer;