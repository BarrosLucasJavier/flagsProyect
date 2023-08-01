import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './searchBar.module.css'
import { useCountries } from "../../hooks/useCountries";

const SearchBar = () => {

    const { getContriesByRegion, getCountries, countries, setCountries } = useCountries();

    const handleSelect = (e) =>{
        const selectedValue = e.target.value;

        if (selectedValue === "all") {
            getCountries()
        } else {
            getContriesByRegion(selectedValue)
        }
    }

    const handleSearch = (e) =>{
        const search = e.target.value;
    
        if(search){
            const countriesFiltered = countries.filter(country => {
                return country.name.common.toLowerCase().indexOf(search) > -1   
            } )
            setCountries(countriesFiltered);
        }else{
            getCountries()
        }
    }

    return (
        <section className={styles.searchContainer}>
        <div className={styles.searchInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            <input onChange={handleSearch} type="text" placeholder="Search for a country..."/>
        </div>
        <select className={styles.searchSelect} onChange={handleSelect}>
            <option defaultValue="all" value="all">Filter by Region</option>
            <option defaultValue="africa" value="africa">Africa</option>
            <option defaultValue="america" value="america">America</option>
            <option defaultValue="asia" value="asia">Asia</option>
            <option defaultValue="europe" value="europe">Europe</option>
            <option defaultValue="oceania" value="oceania">Oceania</option>
        </select>
        </section>
    );
}

export default SearchBar;
