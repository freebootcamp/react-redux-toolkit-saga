import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import signalReducer from "./signalSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { signal: signalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).prepend(sagaMiddleware),
});
