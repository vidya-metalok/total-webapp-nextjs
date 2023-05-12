
import { createSlice } from "@reduxjs/toolkit"

const tokenSixState = {
    tokenSix: ""


}



const tokenSixSlice = createSlice({


    name: "tokenSix",
    initialState: tokenSixState,
    reducers: {
        tokenSixFetch: (store, action) => {
            store.tokenSix = action.payload
        },

    }

})



export const { tokenSixFetch } = tokenSixSlice.actions

export default tokenSixSlice.reducer