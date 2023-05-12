import { createSlice } from "@reduxjs/toolkit"


const tokenThreeState = {
    tokenThree: ""



}



const tokenThreeSlice = createSlice({


    name: "tokenThree",
    initialState: tokenThreeState,
    reducers: {
        tokenThreeFetch: (store, action) => {
            store.tokenThree = action.payload
        },

    }

})



export const { tokenThreeFetch } = tokenThreeSlice.actions

export default tokenThreeSlice.reducer