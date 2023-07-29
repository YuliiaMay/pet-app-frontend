import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const addPetOrNotice = createAsyncThunk(
    "pet/post/addPet",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("/notices/add", data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }        
    }
)


    
