import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const globalReducer = (_, isGlobal) => (isGlobal ? {} : {});
const initialState = JSON.parse(localStorage.getItem("GlobalState")) || {};
export const GlobalContext = React.createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [global, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    localStorage.setItem("GlobalState", JSON.stringify(global));
  }, [global]);

  return (
    <GlobalContext.Provider value={{ global, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
