// styles
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.header}
                style={{ backgroundColor: props.color }}
            >
                <div className={styles.projectLogoDiv}>
                    <img
                        src={props.logoSrc}
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <img
                    src="/icons/verified.svg"
                    alt="Verified"
                    className={styles.verified}
                />
            </div>
            <div className={styles.body}>
                <h2 className={styles.heading}>Project {props.project}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}
export default ProjectCard
