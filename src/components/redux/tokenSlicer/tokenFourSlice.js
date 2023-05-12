import { createSlice } from "@reduxjs/toolkit"


const tokenFourState = {
    tokenFour: ""


}



const tokenFourSlice = createSlice({


    name: "tokenFour",
    initialState: tokenFourState,
    reducers: {
        tokenFourFetch: (store, action) => {
            store.tokenFour = action.payload
        },

    }

})



export const { tokenFourFetch } = tokenFourSlice.actions

export default tokenFourSlice.reducer