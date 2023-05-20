import { createSlice } from "@reduxjs/toolkit"



const tokenEightState = {
    tokenEight: ""



}



const tokenEightSlice = createSlice({


    name: "tokenEight",
    initialState: tokenEightState,
    reducers: {
        tokenEightFetch: (store, action) => {
            store.tokenEight = action.payload
        },

    }

})



export const { tokenEightFetch } = tokenEightSlice.actions

export default tokenEightSlice.reducer