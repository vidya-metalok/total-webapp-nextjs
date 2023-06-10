import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    loginInfo: {},
    totalHoldings: "",
    privKey: "",
    liveTeamAImgUrl: "",
    liveTeamBImgUrl: "",
    idToken: '',
    eachTeamDetails: {},
    userEdit: {}


}

const userSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {
        loginUser: (store, action) => {
            store.loginInfo = action.payload
        },
        logoutUser: (state) => {
            state.loginInfo = null;
        },
        userToken: (state, action) => {
            state.idToken = action.payload
        }
        ,
        holdings: (store, action) => {
            store.totalHoldings = action.payload
        },
        storePrivateKey: (store, action) => {
            store.privKey = action.payload

        },
        liveTeamAImgUrl: (store, action) => {
            store.liveTeamAImgUrl = action.payload

        },
        liveTeamBImgUrl: (store, action) => {
            store.liveTeamBImgUrl = action.payload
        },
        eachTeamDetails: (store, action) => {
            store.eachTeamDetails = action.payload
        },
        userEdit: (store, action) => {
            store.userEdit = action.payload
        }

    }

})


export const { loginUser, holdings, storePrivateKey, liveTeamAImgUrl, liveTeamBImgUrl, logoutUser, userToken, userEdit, eachTeamDetails } = userSlice.actions
export default userSlice.reducer;