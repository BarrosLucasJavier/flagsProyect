import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import { faHome, faWarning } from "@fortawesome/free-solid-svg-icons";
import styles from './notFound.module.css'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <div className={styles.notFoundContainer}>
                <FontAwesomeIcon className={styles.iconWarning} icon={faWarning}/>
                <h2>Page Not Found</h2>
                <button onClick={() => navigate("/")}><FontAwesomeIcon className={styles.iconHome} icon={faHome}/>Go Home</button>
            </div>
        </div>
    );
}

export default NotFound;
