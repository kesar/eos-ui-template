import React, { createContext, useReducer, useContext } from "react";
import PropTypes from "prop-types";
import { reducer } from "./reducer";

const AppStateContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: null,
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
