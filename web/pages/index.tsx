import React from "react";
import Navbar from "~/components/Landing/Navbar";
import Button from "~/components/Button";
import styles from "~/styles/index.module.css";
import PreviewWindow from "~/components/Landing/PreviewWindow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <h1 className={styles.main__text}>
          A Place for Developers <br />
          to <span className={styles.main__text_Gradient}>Deliver</span>{" "}
          Software
        </h1>
        <p className={styles.main__description}>
          Hydrodev is the coolest new platform to find developers, develop and
          manage software, and discover open source projects
        </p>
        <div className={styles.main__buttons}>
          <Button color="muted" text="Learn More" />
          <Button color="accent" text="Join the waitlist" />
        </div>
        <PreviewWindow />
      </div>
    </div>
  );
};

export default Home;
