
import { createSlice } from "@reduxjs/toolkit"
const GsvcState = {
    gsv: ""

}

const gsvcSlice = createSlice({
    name: "gsvc",
    initialState: GsvcState,
    reducers: {
        gsvFetch: (store, action) => {
            store.gsv = action.payload
        },

    }
})

export const { gsvFetch } = gsvcSlice.actions
export default gsvcSlice.reducer;


