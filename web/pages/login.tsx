import { FaGithub, FaTwitter, FaDiscord, FaGoogle } from "react-icons/fa";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.screen}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Sign in to Acme.</h2>
        <Button
          icon={<FaGoogle className={styles.icon} />}
          text="Continue with Google"
        />
        <Button
          icon={<FaGithub className={styles.icon} />}
          text="Continue with Github"
        />
        <Button
          icon={<FaDiscord className={styles.icon} />}
          text="Continue with Discord"
        />
        <Button
          icon={<FaTwitter className={styles.icon} />}
          text="Continue with Twitter"
        />
        <div style={{ height: "1rem" }}></div>
      </div>
    </div>
  );
};

const Button = ({ icon, text }) => {
  return (
    <div className={styles.button}>
      {icon}
      <h3>{text}</h3>
    </div>
  );
};

export default Login;
