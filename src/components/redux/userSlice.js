import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    loginInfo: {},
    totalHoldings: "",
    privKey: ""

}

const userSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {
        loginUser: (store, action) => {
            store.loginInfo = action.payload
        },
        holdings: (store, action) => {
            store.totalHoldings = action.payload
        },
        storePrivateKey: (store, action) => {
            store.privKey = action.payload

        }

    }

})


export const { loginUser, holdings, storePrivateKey } = userSlice.actions
export default userSlice.reducer;