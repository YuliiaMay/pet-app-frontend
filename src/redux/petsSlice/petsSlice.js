import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    FormStage: 1,
    OptionForm: {
        category: null
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
        comments: "",
        location: "",
        price: ""
    },
    // isSubmitted: false,
    isAvailable: false,
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
        accessToNextStep: (state, action) => { state.isAvailable = action.payload },
    },
});


export const { formStage, optionForm, detailsForm, moreInfoForm, accessToNextStep } = petSlice.actions
export const petReducer = petSlice.reducer;