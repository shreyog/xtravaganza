import React from "react";

import GlobalStyles from "./GlobalStyles";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default App;
