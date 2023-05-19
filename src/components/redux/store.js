import { createWrapper } from 'next-redux-wrapper';


import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux';

import priceSlicer from './priceAndMatchesSlicer';
import userSlice from "../redux/userSlice";
import tokenOneSlice from './tokenSlicer/tokenOneSlice';
import tokenThreeSlice from './tokenSlicer/tokenThreeSlice';
import tokenTwoSlice from './tokenSlicer/tokenTwoSlice';
import tokenFourSlice from './tokenSlicer/tokenFourSlice';
import tokenFiveSlice from './tokenSlicer/tokenFiveSlice';
import tokenSixSlice from './tokenSlicer/tokenSixSlice';
import tokenSevenSlice from './tokenSlicer/tokenSevenSlice';
import tokenEightSlice from './tokenSlicer/tokenEightSlice';
import tokenNineSlice from './tokenSlicer/tokenNineSlice';
import tokenTenSlice from './tokenSlicer/tokenTenSlice';
import bsvcSlice from './walletSlicer/bsvcSlice';
import dsvcSlice from './walletSlicer/dsvcSlice';
import lsvcSlice from './walletSlicer/lsvcSlice';
import msvcSlice from './walletSlicer/msvcSlice';
import psvcSlice from './walletSlicer/psvcSlice';
import rsvcSlice from './walletSlicer/rsvcSlice';
import csvcSlice from './walletSlicer/csvcSlice';
import gsvcSlice from './walletSlicer/gsvcSlice';
import hsvcSlice from './walletSlicer/hsvcSlice';
import ksvcSlice from './walletSlicer/ksvcSlice';
// import persistStore from 'redux-persist/es/persistStore';
const rootSlicer = combineReducers({
    user: userSlice,
    priceMatches: priceSlicer,
    tokenOneSlice,
    tokenTwoSlice,
    tokenThreeSlice,
    tokenFourSlice,
    tokenFiveSlice,
    tokenSixSlice,
    tokenSevenSlice,
    tokenEightSlice,
    tokenNineSlice,
    tokenTenSlice,
    bsvc: bsvcSlice,
    csvc: csvcSlice,
    dsvc: dsvcSlice,
    gsvc: gsvcSlice,
    hsvc: hsvcSlice,
    ksvc: ksvcSlice,
    lsvc: lsvcSlice,
    msvc: msvcSlice,
    psvc: psvcSlice,
    rsvc: rsvcSlice


})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootSlicer)

// export const store = configureStore({
//     reducer: persistedReducer,
// });

const makeStore = () => configureStore({ reducer: persistedReducer });


export const store = makeStore();
export const wrapper = createWrapper(() => store);

export const persistor = persistStore(store);



