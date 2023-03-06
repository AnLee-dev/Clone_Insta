import { SectionEnum } from "@/constants/routes";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface IState {
  sectionSelected: SectionEnum;
}

const initialState: IState = {
  sectionSelected: SectionEnum.HOME,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSectionSelect(state, action: PayloadAction<SectionEnum>) {
      state.sectionSelected = action.payload;
    },
  },
});

export const { setSectionSelect } = navSlice.actions;
export default navSlice.reducer;
