import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tokenPrices: [],
    matchesList: []

}

const priceAndMatchesSlice = createSlice({
    name: "counterToolkitExample",
    initialState,
    reducers: {
        allPrices: (store, action) => {
            store.tokenPrices = [...action.payload]
        },
        allIplMatches: (store, action) => {
            store.matchesList = [...action.payload]

        }



    }
})


export const { allPrices, allIplMatches } = priceAndMatchesSlice.actions
export default priceAndMatchesSlice.reducer;