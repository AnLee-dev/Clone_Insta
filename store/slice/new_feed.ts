/* eslint-disable no-empty-pattern */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { new_feed } from "../../mocks/new-feed";
import { INewFeed } from "../../model/newFeed";
import { Stats } from "fs";
import { toogleLike } from "../actionCreator/feed";

interface INewFeeds {
  data: INewFeed[];
  hasErr: boolean;
  message: "";
}

const initialState: INewFeeds = {
  data: [...new_feed],
  hasErr: false,
  message: "",
};

const newFeedSlice = createSlice({
  name: "new-feed",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(toogleLike.pending, (state, action) => {});
    builder.addCase(toogleLike.fulfilled, (state, action) => {
      state.data.forEach((i) => {
        if (i.id === action.payload) {
          if (i.has_liked) {
            i.like_count--;
            console.log('hahshdhahds');
            
          } else {
            i.like_count++;
          }
          i.has_liked = !i.has_liked;
        }
      });
    })
    builder.addCase(toogleLike.rejected,(state,action)=>{

    })
  },
});

export default newFeedSlice.reducer;
