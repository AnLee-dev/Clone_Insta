import { createSlice } from "@reduxjs/toolkit";
import { INewFeed } from "../../model/newFeed";
import { toogleLike } from "../actionCreator/feed";

interface INewFeeds {
  data: INewFeed[];
  hasErr: boolean;
  message: "";
}

const initialState: INewFeeds = {
  data: [],
  hasErr: false,
  message: "",
};

const newFeedSlice = createSlice({
  name: "new-feed",
  initialState,
  reducers: {
    save: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toogleLike.pending, (state, action) => {});
    builder.addCase(toogleLike.fulfilled, (state, action) => {
      state.data.forEach((i) => {
        if (i.id === action.payload) {
          if (i.has_liked) {
            i.like_count--;
          } else {
            i.like_count++;
          }
          i.has_liked = !i.has_liked;
        }
      });
    });
    builder.addCase(toogleLike.rejected, (state, action) => {});
  },
});

export const { save } = newFeedSlice.actions;
export default newFeedSlice.reducer;
