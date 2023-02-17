import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export type TSection =
  | "HOME"
  | "SEARCH"
  | "EXPLORE"
  | "REELS"
  | "MESSENGER"
  | "NOTIFICATION"
  | "CREATE"
  | "PROFILE"
  | "MORE";

interface IState {
  sectionSelected: TSection;
}

const initialState: IState = {
  sectionSelected: "HOME",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSectionSelect(state, action: PayloadAction<TSection>) {
      state.sectionSelected = action.payload;
    },
  },
});

export const {setSectionSelect} = navSlice.actions
export default navSlice.reducer