import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import userReducer from "./reducers/userSlice";
import campaignsReducer from "./reducers/campaignSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    campaigns: campaignsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store;
