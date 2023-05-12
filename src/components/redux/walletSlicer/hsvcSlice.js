
import { createSlice } from "@reduxjs/toolkit"
const HsvcState = {
    hsv: ""

}

const hsvcSlice = createSlice({
    name: "hsvc",
    initialState: HsvcState,
    reducers: {
        hsvFetch: (store, action) => {
            store.hsv = action.payload
        },


    }
})


export const { hsvFetch } = hsvcSlice.actions
export default hsvcSlice.reducer;
