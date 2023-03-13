import { TExplore } from "@/model/explore";
import { createSlice } from "@reduxjs/toolkit";

interface IExplore {
  data: TExplore[];
  hasErr: boolean;
  message: "";
}

const initialState: IExplore = {
  data: [],
  hasErr: false,
  message: "",
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {
    save: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { save } = exploreSlice.actions;
export default exploreSlice.reducer;
