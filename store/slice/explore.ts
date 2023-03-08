import { explore } from "@/mocks/explore";
import { createSlice } from "@reduxjs/toolkit";

interface IExplore {
  data: any;
  hasErr: boolean;
  message: "";
}

const initialState: IExplore = {
  data: [...explore],
  hasErr: false,
  message: "",
};

const exploreSlice = createSlice({
  name: "explore",
  initialState,
  reducers: {},
});

export default exploreSlice.reducer;
