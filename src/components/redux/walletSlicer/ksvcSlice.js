import { createSlice } from "@reduxjs/toolkit"
const KsvcState = {
    ksv: ""

}
const ksvcSlice = createSlice({
    name: "ksvc",
    initialState: KsvcState,
    reducers: {
        ksvFetch: (store, action) => {
            store.ksv = action.payload
        },

    }

})
export const { ksvFetch } = ksvcSlice.actions
export default ksvcSlice.reducer;
