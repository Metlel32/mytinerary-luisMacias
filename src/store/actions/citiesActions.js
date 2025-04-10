
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  const response = await axios.get("http://localhost:8080/api/city/allCities")
  return response.data.response
});
