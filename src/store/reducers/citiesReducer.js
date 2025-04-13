
import { createReducer } from "@reduxjs/toolkit"
import { fetchCities, searchActions } from "../actions/citiesActions"

export const StatusHttp = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
}

const initialState = {
  cities: [],
  status: StatusHttp.IDLE,
  searchActions: "",
  citiesFilter: [],
  error: null,
}

export const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCities.pending, (state) => {
      state.status = StatusHttp.PENDING
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload
      state.citiesFilter = action.payload
      state.status = StatusHttp.SUCCEEDED
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.status = StatusHttp.FAILED
      state.error = action.error.message
    })
    .addCase(searchActions, (state, action) => {
      state.searchActions = action.payload
      const term = action.payload.toLowerCase()
      state.citiesFilter = term === "" ? state.cities  : state.cities.filter(city =>city.name.toLowerCase().startsWith(term))
    })
});
