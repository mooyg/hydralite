import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({
    children,
    navType,
    waitlistCardRef,
}: {
    children?: any;
    navType: "home" | "dash";
    waitlistCardRef: React.MutableRefObject<any>;
}) => {
    return (
        <div>
            {navType === "home" && <Navbar waitlistCardRef={waitlistCardRef} />}
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
