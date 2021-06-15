import React from "react";
import styles from "~/styles/index.module.css";

const Segment = ({ subHeading, heading, description, vectorPath }) => {
  return (
    <div className={styles.sectionTwo__segment}>
      <div>
        <span className={styles.sectionTwo__segment_preHeading}>
          {subHeading.toUpperCase()}
        </span>
        <h1 className={styles.sectionTwo__segment_heading}>{heading}</h1>
        <p className={styles.sectionTwo__segment_description}>{description}</p>
      </div>
      <img src={vectorPath} className={styles.sectionTwo__segment_vector} />
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <Segment
        heading="Project Marketing"
        subHeading="Hassle Free Project Promotion"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe itaque asperiores libero consequatur rerum quibusdam velit laboriosam omnis eligendi aliquam sapiente earum porro fugit cupiditate optio non maiores, recusandae odio et dolore. Ducimus ad ipsam quia excepturi beatae. Ratione, animi."
        vectorPath="/vectors/project-marketing-illustration.svg"
      />
      <div className={styles.sectionTwo__segment_seperator}></div>
      <Segment
        heading="Developer Discovery"
        subHeading="Networking Enhanced"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe itaque asperiores libero consequatur rerum quibusdam velit laboriosam omnis eligendi aliquam sapiente earum porro fugit cupiditate optio non maiores, recusandae odio et dolore. Ducimus ad ipsam quia excepturi beatae. Ratione, animi."
        vectorPath="/vectors/developer-discovery-illustration.svg"
      />
    </div>
  );
};

export default SectionTwo;
