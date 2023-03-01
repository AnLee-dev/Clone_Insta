/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import { stories } from "../../mocks/stories";


interface IState {
  data: any[],
  hasErr: boolean,
  message:''
}

const initialState:IState = {
    data:[...stories],
    hasErr: false,
    message:''
}
const storiesSlice = createSlice({
    name: "stories",
    initialState,
    reducers:{

    }
})

// export const {} = storiesSlice.actions
export default storiesSlice.reducer