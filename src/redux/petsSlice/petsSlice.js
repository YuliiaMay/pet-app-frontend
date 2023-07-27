import { createSlice } from "@reduxjs/toolkit";
import { addPet } from "./operations";


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
        text: "",
        location: "",
        price: ""
    },
    // isSubmitted: false,
    isLoading: false,
    error: null    
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        formStage: (state, action) => { state.FormStage = action.payload },
        optionForm: (state, action) => { state.OptionForm = action.payload },
        detailsForm: (state, action) => { state.DetailsForm = action.payload },
        moreInfoForm: (state, action) => { state.MoreInfoForm = action.payload },
    },
    extraReducers: {
        [addPet.pending]: handlePending,
        [addPet.refected]: handleRejected,
        [addPet.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null
        }
    }
});

export const { formStage, optionForm, detailsForm, moreInfoForm } = petSlice.actions
export const petReducer = petSlice.reducer;