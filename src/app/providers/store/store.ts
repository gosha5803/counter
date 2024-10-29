import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../../../entites/Counter";

const rootReducer = combineReducers({
  counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
