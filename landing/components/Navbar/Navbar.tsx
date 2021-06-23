import React from "react";
import styles from "./Navbar.module.scss";
import { projectName } from "~/constants";
import scrollToRef from "util/scrollToRef";

const NavLink = ({
    text,
    href,
    onClick,
}: {
    text: string;
    href?: string;
    onClick: (e) => any;
}) => {
    return (
        <a className={styles.navbar__link} href={href || ""} onClick={onClick}>
            {text}
        </a>
    );
};

const Navbar = ({ waitlistCardRef }) => {
    return (
        <nav className={styles.navbar}>
            <img
                src="/logo.png"
                alt={projectName}
                className={styles.navbar__logo}
            />
            <NavLink
                text="Join Waitlist"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToRef(waitlistCardRef);
                }}
            />
        </nav>
    );
};

export default Navbar;
