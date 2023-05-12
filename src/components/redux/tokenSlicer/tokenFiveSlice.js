
import { createSlice } from "@reduxjs/toolkit"

const tokenFiveState = {
    tokenFive: ""



}



const tokenFiveSlice = createSlice({


    name: "tokenFive",
    initialState: tokenFiveState,
    reducers: {
        tokenFiveFetch: (store, action) => {
            store.tokenFive = action.payload
        },

    }

})



export const { tokenFiveFetch } = tokenFiveSlice.actions

export default tokenFiveSlice.reducer