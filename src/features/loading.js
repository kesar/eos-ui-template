import React from "react";
import { GlobalStyle } from "../components/globalStyles";

const Loading = () => {
  return (
    <>
      <GlobalStyle />
      <p>Loading...</p>
    </>
  );
};

export default React.memo(Loading);
