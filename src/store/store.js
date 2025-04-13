import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducer";
import { itinerariesReducer } from "./reducers/itinerariesReducer";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    itineraries: itinerariesReducer
  },
});

export default store;
