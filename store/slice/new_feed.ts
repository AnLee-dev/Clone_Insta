/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit"
import { new_feed } from "../../mocks/new-feed"
import { INewFeed } from "../../model/newFeed"

interface INewFeeds {
    data: INewFeed[],
    hasErr: boolean,
    message: ''
}

const initialState:INewFeeds = {
    data: [...new_feed],
    hasErr: false,
    message: ''
}

const newFeedSlice = createSlice({
    name: "new-feed",
    initialState,
    reducers:{}
})

export const {} = newFeedSlice.actions
export default newFeedSlice.reducer