import React from "react";
import Navbar from "~/components/Landing/Navbar";
import Button from "~/components/Button";
import styles from "~/styles/index.module.css";
import PreviewWindow from "~/components/Landing/PreviewWindow";
import TextLoop from "react-text-loop";
import { projectName } from "~/constants";
import SectionOne from "~/components/Landing/SectionOne";

const Home = () => {
  const adjectives = ["Discover", "Develop", "Deliver", "Deploy"];
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.main__sub}>
          <h1 className={styles.main__text}>
            A Place for Developers <br />
            to{" "}
            <TextLoop interval={2000}>
              {adjectives.map((word, index) => (
                <span key={index} className={styles.main__text_Gradient}>
                  {word}
                </span>
              ))}
            </TextLoop>{" "}
            Software
          </h1>
          <p className={styles.main__description}>
            {projectName} is the coolest new platform to find developers,
            develop and manage software, and discover open source projects
          </p>
          <div className={styles.main__buttons}>
            <Button color="muted" text="Learn More" />
            <Button color="accent" text="Join the waitlist" />
          </div>
        </div>
        <div className={styles.main__previewWindowContainer}>
          <PreviewWindow />
        </div>
      </div>
      <SectionOne />
    </div>
  );
};

export default Home;
