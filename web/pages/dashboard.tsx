import Navbar from "../components/Dashboard/Navbar";
import styles from "../styles/Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Navbar />
        </div>
    );
};

export default Dashboard;
