import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const addPetOrNotice = createAsyncThunk(
    "pet/post/addPet",
    async (data, thunkAPI) => {
        try {
            // for (const [key, value] of data.entries()) {
            //     console.log(`${key}: ${value}`);
            // }      

            const response = await axios.post("/notices/add", data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }        
    }
)