import React from "react";
import { GlobalStyle } from "../components/globalStyles";

const Error = () => {
  return (
    <>
      <GlobalStyle />
      <p>There was an error in loading this page.</p>
    </>
  );
};

export default React.memo(Error);
