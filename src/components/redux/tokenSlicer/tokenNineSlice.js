
import { createSlice } from "@reduxjs/toolkit"

const tokenNineState = {
    tokenNine: ""



}



const tokenNineSlice = createSlice({


    name: "tokenNine",
    initialState: tokenNineState,
    reducers: {
        tokenNineFetch: (store, action) => {
            store.tokenNine = action.payload
        },

    }

})



export const { tokenNineFetch } = tokenNineSlice.actions

export default tokenNineSlice.reducer