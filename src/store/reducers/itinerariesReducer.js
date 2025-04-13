
import { createReducer } from "@reduxjs/toolkit"
import { fetchItineraries } from "../actions/tinerariesActions";

export const StatusHttp = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
}

const itinerariesState = {
    itineraries : [],
    status : StatusHttp.IDLE,
    error : null
}

const initialState = {
    itineraries: itinerariesState,
    status: StatusHttp.IDLE,
    error: null,
}





export const itinerariesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchItineraries.pending, (state) => {
            state.status = StatusHttp.PENDING;
        })
        .addCase(fetchItineraries.fulfilled, (state, action) => {
            
            
            state.itineraries.itineraries = action.payload
            state.status = StatusHttp.SUCCEEDED;
        })
        .addCase(fetchItineraries.rejected, (state, action) => {
            state.status = StatusHttp.FAILED;
            state.error = action.error.message;
        });
});