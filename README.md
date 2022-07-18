# Traffic signal using Redux Toolkit and Redux-Saga

## About the project
This project simulates a traffic signal with three lights: Green, Orange and Red. 

## About the code 
* Redux store has been created in `store.js` with `configureStore` of Redux Toolkit with default middleware. Thunk has been disabled and `sagaMiddleware` has been added.
```JavaScript
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { signal: signalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).prepend(sagaMiddleware),
});

```

* React-Redux `<Provider>` component has been put around `<App/>`
```JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```

* A Redux "slice" reducer has been created with `createSlice`. `createSlice` is a Redux Toolkit function that accepts an initial state, an object of reducer functions, and a "slice name", and _automatically generates action creators and action types that correspond to the reducers and state_.
 
```JavaScript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSignal: "RED",
};

export const signalSlice = createSlice({
  name: "signal",
  initialState,
  reducers: {
    changeSignal: (state, action) => {
      state.currentSignal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSignal } = signalSlice.actions;

export default signalSlice.reducer;
```

* Data from the store is read using `useSelector` hook. Dispatch function is called using `useDispatch` hook. 

```JSX
import { useSelector, useDispatch } from "react-redux";
function App() {
  const signal = useSelector((state) => state.signal.currentSignal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(changeSignal("RED"));
        }}
      >
        Red
      </button>
        {/*... */}
      {signal}
    </div>
  );
}

export default App;
```