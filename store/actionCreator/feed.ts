import { APP_API } from "@/apis";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const toogleLike = createAsyncThunk(
  "feed/toggleLike",
  async (artcleId :any, thunkAPI) => {
    try {
      const { data } = await axios.get(APP_API.timeLine.list);
      data.forEach((item: any) => {
        if (item.id === artcleId) {
          item.has_liked ? !item.has_liked : item.has_liked
          item.like_count = item.has_liked ? item.like_count + 1 : item.like_count - 1
        }
      });
      return artcleId;
    } catch (err: any) {
      {
        if (!err.response) {
          throw err;
        }
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
);
