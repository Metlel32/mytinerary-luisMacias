import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducer";

const store = configureStore({
  reducer: {
    cities: citiesReducer
  },
});

export default store;
