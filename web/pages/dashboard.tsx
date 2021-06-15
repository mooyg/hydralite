import styles from '../styles/Dashboard.module.scss'

// components
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Dashboard = () => {
    return (
        <div className={styles.screen}>
            <Navbar />
            <Sidebar />
            <ProjectCard />
        </div>
    )
}

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoDiv}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.nav_right}>
                <img
                    src="/icons/notifications.svg"
                    className={styles.notif}
                    alt="Notifications"
                />
                <img
                    src="/sample_user.svg"
                    alt="Logo"
                    className={styles.avatar}
                />
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.icons}>
                <img src="/icons/home.svg" alt="Home" className={styles.icon} />
                <img
                    src="/icons/projects.svg"
                    alt="Projects"
                    className={styles.icon}
                />
                <img
                    src="/icons/messages.svg"
                    alt="Messages"
                    className={styles.icon}
                />
                <img
                    src="/icons/following.svg"
                    alt="Following"
                    className={styles.icon}
                />
                <img
                    src="/icons/profile.svg"
                    alt="Profile"
                    className={styles.icon}
                />
            </div>
            <div className={styles.createButton}>
                <img src="/icons/plus.svg" alt="Plus" className={styles.icon} />
            </div>
        </div>
    )
}

export default Dashboard
