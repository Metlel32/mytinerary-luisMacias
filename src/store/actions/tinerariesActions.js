
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const fetchItineraries = createAsyncThunk("itineraries/fetchItineraries", async (id) => {

  const response = await axios.get(`http://localhost:8080/api/city/id/${id}`)
  
  return response.data.response
});


export {fetchItineraries}