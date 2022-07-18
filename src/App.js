import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSignal } from "./signalSlice";
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
      <button
        onClick={() => {
          dispatch(changeSignal("GREEN"));
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          dispatch(changeSignal("ORANGE"));
        }}
      >
        Orange
      </button>
      {signal}
    </div>
  );
}

export default App;
