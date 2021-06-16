import React from 'react'
import styles from '~/styles/index.module.scss'

const NavLink = ({ text, href }: { text: string; href?: string }) => {
    return (
        <a className={styles.navbar__link} href={href || ''}>
            {text}
        </a>
    )
}

export default NavLink
