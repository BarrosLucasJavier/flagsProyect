import { useCountries } from "../../hooks/useCountries";
import CardCountry from "./CardCountry";
import styles from './listCountries.module.css'


const ListCountries = () => {

    const { countries } = useCountries();
    return (
        <main className={styles.listContainer}>
            {countries.map((country, index) =>{
                return (<CardCountry key={index} country={country}/>)
            })}
        </main>
    );
}

export default ListCountries;
