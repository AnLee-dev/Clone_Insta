import { TTokens } from "@/model/auth/jwtToken";
import { createSlice } from "@reduxjs/toolkit";

interface ITokens {
  data: TTokens[];
  hasErr: boolean;
  message: "";
}

const initialState: ITokens = {
  data: [],
  hasErr: false,
  message: "",
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    save: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { save } = tokenSlice.actions;
export default tokenSlice.reducer;
