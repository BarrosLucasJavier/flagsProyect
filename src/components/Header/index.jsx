import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './header.module.css'
import {  useEffect, useState } from "react";
import { setMode } from "../../utils/themes.utils";

const Header = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        setMode(darkMode)
    }, [darkMode]);

    return (
        <header className={styles.headerContainer}>
            <h1>Where in the world?</h1>
            <button onClick={()=>setDarkMode(!darkMode)}>
                <FontAwesomeIcon icon={faMoon}/>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
}

export default Header;
