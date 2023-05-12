import { createSlice } from "@reduxjs/toolkit"


const tokenTenState = {
    tokenTen: ""



}



const tokenTenSlice = createSlice({


    name: "tokenTen",
    initialState: tokenTenState,
    reducers: {
        tokenTenFetch: (store, action) => {
            store.tokenTen = action.payload
        },

    }

})



export const { tokenTenFetch } = tokenTenSlice.actions

export default tokenTenSlice.reducer