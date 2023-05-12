import { createSlice } from "@reduxjs/toolkit"


const tokenTwoState = {
    tokenTwo: ""



}



const tokenTwoSlice = createSlice({
    name: "tokenTwo",
    initialState: tokenTwoState,
    reducers: {
        tokenTwoFetch: (store, action) => {
            store.tokenTwo = action.payload
        },

    }

})



export const { tokenTwoFetch } = tokenTwoSlice.actions

export default tokenTwoSlice.reducer