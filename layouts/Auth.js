import React from "react";
import FooterAdmin from "../components/Footers/FooterAdmin";

import Header from "../components/Headers/Header";

const Auth = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FooterAdmin />
    </>
  );
};

export default Auth;
