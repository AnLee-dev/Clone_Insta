import { reels } from "@/mocks/reels";
import { TReels } from "@/model/reels";
import { createSlice } from "@reduxjs/toolkit";

interface IReels {
    data: TReels[];
    hasErr: boolean;
    message: '';
}

const initialState: IReels = {
    data: [...reels],
    hasErr: false,
    message: ''
}

const reelSlice = createSlice({
    name:'reels',
    initialState,
    reducers: {},
})

export default reelSlice.reducer;

