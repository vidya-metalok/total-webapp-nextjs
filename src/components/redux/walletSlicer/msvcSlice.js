import { createSlice } from "@reduxjs/toolkit"

const MsvcState = {
    msv: ""

}
const msvcSlice = createSlice({
    name: "msvc",
    initialState: MsvcState,
    reducers: {
        msvFetch: (store, action) => {
            store.msv = action.payload
        },
    }
})
export const { msvFetch } = msvcSlice.actions
export default msvcSlice.reducer;

