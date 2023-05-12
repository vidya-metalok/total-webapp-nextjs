import { createSlice } from "@reduxjs/toolkit"
const RsvcState = {
    rsv: ""

}

const rsvcSlice = createSlice({
    name: "rsvc",
    initialState: RsvcState,
    reducers: {
        rsvFetch: (store, action) => {
            store.rsv = action.payload
        }

    }
})
export const { rsvFetch } = rsvcSlice.actions
export default rsvcSlice.reducer;