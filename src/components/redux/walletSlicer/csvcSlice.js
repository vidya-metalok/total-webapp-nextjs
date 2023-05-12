import { createSlice } from "@reduxjs/toolkit"

const CsvcState = {
    csv: ""

}



const csvcSlice = createSlice({
    name: "csvc",
    initialState: CsvcState,
    reducers: {
        csvFetch: (store, action) => {
            store.csv = action.payload
        },

    }

})

export const { csvFetch } = csvcSlice.actions
export default csvcSlice.reducer;

