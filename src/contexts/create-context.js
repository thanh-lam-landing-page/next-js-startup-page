import React, { createContext, useContext, useReducer } from "react";

export function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;
  const stateCtx = createContext(defaultValue);
  const dispatchCtx = createContext(defaultDispatch);

  function useStateCtx(property) {
    const state = useContext(dispatchCtx);
    return state[property];
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }
  return [useStateCtx, useDispatchCtx, Provider];
}
