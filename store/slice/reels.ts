import { TReels } from "@/model/reels";
import { createSlice } from "@reduxjs/toolkit";

interface IReels {
  data: TReels[];
  hasErr: boolean;
  message: "";
}

const initialState: IReels = {
  data: [],
  hasErr: false,
  message: "",
};

const reelSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    save: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { save } = reelSlice.actions;
export default reelSlice.reducer;
