import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6464b2bf127ad0b8f8a57f71.mockapi.io';

export const fetchPets = createAsyncThunk(
    'pets/getPets',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/notices/sell');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchPetById = createAsyncThunk(
    'pets/getPets',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/notices/');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);