import React from "react";
import Navbar from "~/components/Landing/Navbar";
import styles from "~/styles/index.module.css";

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
      </div>
    </div>
  );
};

export default Home;
