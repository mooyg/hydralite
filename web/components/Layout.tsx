import React from "react";
import Navbar from "~/components/Landing/Navbar";

const Layout = ({
  children,
  navType,
}: {
  children: any;
  navType: "home" | "dash";
}) => {
  return (
    <div>
      {navType === "home" && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
