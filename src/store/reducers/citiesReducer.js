
import { createReducer } from "@reduxjs/toolkit"
import { fetchCities } from "../actions/citiesActions"

export const StatusHttp = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCEEDED: 'succeeded', 
  FAILED: 'failed',
}

const initialState = {
  cities: [],
  status: StatusHttp.IDLE,
  error: null,
}

export const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCities.pending, (state) => {
      state.status = StatusHttp.PENDING;
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.status = StatusHttp.SUCCEEDED;
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.status = StatusHttp.FAILED;
      state.error = action.error.message;
    });
});
