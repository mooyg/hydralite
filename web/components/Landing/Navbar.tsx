import React from 'react'
import styles from '~/styles/Index.module.scss'
import NavLink from '~/components/Landing/NavLink'
import { projectName } from '~/constants'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <img
                    src="/devmark-logo-bgtransp.png"
                    alt={projectName}
                    className={styles.navbar__logo}
                />
            </div>
            <div>
                <NavLink text="Join Waitlist" />
            </div>
        </nav>
    )
}

export default Navbar
