import { createSlice } from "@reduxjs/toolkit"

const tokenOneState = {
    tokenOne: ""

}



const tokenOneSlice = createSlice({
    name: "tokenOne",
    initialState: tokenOneState,
    reducers: {
        tokenOneFetch: (store, action) => {
            store.tokenOne = action.payload
        }

    }

})



export const { tokenOneFetch } = tokenOneSlice.actions

export default tokenOneSlice.reducer