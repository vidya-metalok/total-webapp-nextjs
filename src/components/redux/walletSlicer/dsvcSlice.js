import { createSlice } from "@reduxjs/toolkit"
const DsvcState = {
    dsv: ""

}


const dsvcSlice = createSlice({
    name: "dsvc",
    initialState: DsvcState,
    reducers: {
        dsvFetch: (store, action) => {
            store.dsv = action.payload
        },

    }

})

export const { dsvFetch } = dsvcSlice.actions
export default dsvcSlice.reducer;

