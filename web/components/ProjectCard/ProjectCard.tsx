// styles
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.projectLogoDiv}>
                    <img src="/logo.png" alt="Logo" className={styles.logo} />
                </div>
                <img
                    src="/icons/verified.svg"
                    alt="Verified"
                    className={styles.verified}
                />
            </div>
            <div className={styles.body}>
                <h2 className={styles.heading}>Project HydraLite</h2>
                <p className={styles.description}>
                    It is a long established fact that a reader will be
                    distracted by the stuff lol hi
                </p>
            </div>
        </div>
    )
}
export default ProjectCard
