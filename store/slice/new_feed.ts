import { createSlice } from "@reduxjs/toolkit";
import { toogleLike } from "../actionCreator/feed";
import { TPost } from "@/model/post/post";

interface INewFeeds {
  data: TPost[];
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
          if (i.hasLike) {
            i.likeCount--;
          } else {
            i.likeCount++;
          }
          i.hasLike = !i.hasLike;
        }
      });
    });
    builder.addCase(toogleLike.rejected, (state, action) => {});
  },
});

export const { save } = newFeedSlice.actions;
export default newFeedSlice.reducer;
