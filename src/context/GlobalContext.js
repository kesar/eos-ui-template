import React, { useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <GlobalContext.Provider
      value={{ login: loginHandler, isAuth: isAuthenticated }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
