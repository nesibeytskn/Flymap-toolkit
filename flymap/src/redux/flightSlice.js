import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { options } from "./constants";

export const getFlightData = createAsyncThunk(
  "flights/getFlights",
  async () => {
    const res = await axios.request(options);
    console.log(res);
  }
);
const initialState = {
  flights: [],
  flightsLoading: true,
  isError: false,
};

export const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: {},
});
