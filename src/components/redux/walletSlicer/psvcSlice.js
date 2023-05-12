import { createSlice } from "@reduxjs/toolkit"
const PsvcState = {
    psv: ""
}









const psvcSlice = createSlice({
    name: "psvc",
    initialState: PsvcState,
    reducers: {
        psvFetch: (store, action) => {
            store.psv = action.payload
        },

    }
})


export const { psvFetch } = psvcSlice.actions
export default psvcSlice.reducer;
