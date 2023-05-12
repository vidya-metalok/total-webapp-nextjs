import { createSlice } from "@reduxjs/toolkit"



const tokenSevenState = {
    tokenSeven: ""



}



const tokenSevenSlice = createSlice({


    name: "tokenSeven",
    initialState: tokenSevenState,
    reducers: {
        tokenSevenFetch: (store, action) => {
            store.tokenSeven = action.payload
        },

    }

})



export const { tokenSevenFetch } = tokenSevenSlice.actions

export default tokenSevenSlice.reducer