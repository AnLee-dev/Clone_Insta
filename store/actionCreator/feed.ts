import { APP_API } from "@/apis";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const toogleLike = createAsyncThunk(
  "feed/toggleLike",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(APP_API.timeLine.list);
      console.log(data);
      
      return data;
      
    } catch (err: any) {
      {
        if(!err.response){
          throw err
        }
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
);
