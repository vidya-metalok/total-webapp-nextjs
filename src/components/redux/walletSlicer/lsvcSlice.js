
import { createSlice } from "@reduxjs/toolkit"

const LsvcState = {
    lsv: ""

}
const lsvcSlice = createSlice({
    name: "lsvc",
    initialState: LsvcState,
    reducers: {
        lsvFetch: (store, action) => {
            store.lsv = action.payload
        }

    }
})
export const { lsvFetch } = lsvcSlice.actions
export default lsvcSlice.reducer;

