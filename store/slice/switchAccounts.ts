/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import {userAccount} from "../../mocks/stories";

interface IState {
  data: any[],
  hasErr: boolean,
  message:''
}

const initialState:IState = {
    data:[...userAccount],
    hasErr: false,
    message:''
}
const userAccountSlice = createSlice({
    name: "userAccount",
    initialState,
    reducers:{

    }
})

export const {} = userAccountSlice.actions
export default userAccountSlice.reducer 