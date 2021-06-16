import React from 'react'
import styles from '~/styles/index.module.scss'

const WaitlistCard = () => {
    return (
        <div className={styles.waitlistCard}>
            <h3>{'What are you waiting for?'.toUpperCase()}</h3>
            <h1>Sign Up For The Waitlist!</h1>
            <div className={styles.waitlistCard__textbox}>
                <input type="email" placeholder={'email'.toUpperCase()} />
            </div>
        </div>
    )
}

export default WaitlistCard
