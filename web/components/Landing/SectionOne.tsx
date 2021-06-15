import React from "react";
import styles from "~/styles/index.module.css";

const SectionOne = () => {
  return (
    <div className={styles.sectionOne}>
      <div className={styles.sectionOne__main}>
        <img
          src="/vectors/project-management-illustration.svg"
          className={styles.sectionOne__vector}
        />
        <div className={styles.sectionOne__content}>
          <span className={styles.sectionOne__preHeading}>
            {"Intuitive, Powerful, Collaborative".toUpperCase()}
          </span>
          <h1 className={styles.sectionOne__heading}>Project Management</h1>
          <p className={styles.sectionOne__description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            itaque asperiores libero consequatur rerum quibusdam velit
            laboriosam omnis eligendi aliquam sapiente earum porro fugit
            cupiditate optio non maiores, recusandae odio et dolore. Ducimus ad
            ipsam quia excepturi beatae. Ratione, animi.
          </p>
        </div>
      </div>
      <div className={styles.sectionOne__featureContainer}>
        <div className={styles.sectionOne__feature}>
          <h3>{"Task Boards".toUpperCase()}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            consequatur pariatur soluta libero itaque quos illo fugiat, ipsam,
            voluptate saepe beatae necessitatibus voluptates praesentium iusto
            exercitationem dolorum deserunt at et. Quibusdam sit iure veniam qui
            iusto eius dolore hic ut?
          </p>
        </div>
        <span className={styles.sectionOne__featureSeperator}></span>
        <div className={styles.sectionOne__feature}>
          <h3>{"Project Roadmap".toUpperCase()}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            consequatur pariatur soluta libero itaque quos illo fugiat, ipsam,
            voluptate saepe beatae necessitatibus voluptates praesentium iusto
            exercitationem dolorum deserunt at et. Quibusdam sit iure veniam qui
            iusto eius dolore hic ut?
          </p>
        </div>
        <span className={styles.sectionOne__featureSeperator}></span>
        <div className={styles.sectionOne__feature}>
          <h3>{"Audio Rooms".toUpperCase()}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            consequatur pariatur soluta libero itaque quos illo fugiat, ipsam,
            voluptate saepe beatae necessitatibus voluptates praesentium iusto
            exercitationem dolorum deserunt at et. Quibusdam sit iure veniam qui
            iusto eius dolore hic ut?
          </p>
        </div>
        <span className={styles.sectionOne__featureSeperator}></span>
      </div>
    </div>
  );
};

export default SectionOne;
