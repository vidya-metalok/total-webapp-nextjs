
import { createSlice } from "@reduxjs/toolkit";
const BsvcState = {
    bsv: ""

}


const bsvcSlice = createSlice({
    name: "walletbalancee",
    initialState: BsvcState,
    reducers: {
        bsvFetch: (store, action) => {
            store.bsv = action.payload;


        },


    }

})

export const { bsvFetch } = bsvcSlice.actions
export default bsvcSlice.reducer;












