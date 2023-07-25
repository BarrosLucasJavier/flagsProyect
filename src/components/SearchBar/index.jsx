import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './searchBar.module.css'

const SearchBar = () => {
    return (
        <section>
        <div className={styles.searchInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
            <input type="text" placeholder="Search for a country..."/>
        </div>
        </section>
    );
}

export default SearchBar;
